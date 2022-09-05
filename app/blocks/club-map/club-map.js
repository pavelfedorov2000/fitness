app.clubsMap = {
    name: 'clubsMap',
    description: 'your script description',
    init() {
        $.ajax({
            url: 'assets/clubs.json',
            method: 'GET',
            contentType: 'application/json',
            dataType: 'json'
        }).done(response => {
            const clubsData = response.clubs;

            if ($('.clubs-page').length) {
                ymaps.ready(function () {
                    // Создание экземпляра карты и его привязка к созданному контейнеру.
                    let clubsMap = new ymaps.Map('clubs-map', {
                        center: clubsData[0].coordinates,
                        zoom: 5,
                        controls: [],
                        //balloonOffset: [38, 38]
                    }, {
                        searchControlProvider: 'yandex#search',
                        //suppressMapOpenBlock: true
                    }),
                        clusterer = new ymaps.Clusterer({
                            preset: 'islands#invertedVioletClusterIcons',
                            clusterIconColor: '#FFCC48',
                            clusterIcons: [{
                                //href: window.front.icons_path.cluster,
                                size: [38, 38],
                                offset: [-19, -19]
                            }],
                            maxZoom: 5,
                            gridSize: 38,
                            groupByCoordinates: false,
                            clusterDisableClickZoom: false,
                            clusterHideIconOnBalloonOpen: false,
                            geoObjectHideIconOnBalloonOpen: false,
                            hasBalloon: false
                        });

                    // Создание макета балуна на основе Twitter Bootstrap.
                    let warehouseBalloonLayout = ymaps.templateLayoutFactory.createClass(
                        `<div class="map-balloon">
                            $[properties.balloonTitle]
                            $[properties.balloonAddress]
                            $[properties.balloonWorkHours]
                            $[properties.balloonTel]
                            <a class="btn map-balloon__btn" href="#">Подробнее о клубе</a>
                        </div>`
                    );

                    //let warehousePlacemark;
                    let clubsPlacemarks = {};
                    var GeoObjects = [];
                    for (let i = 0; i < clubsData.length; i++) {
                        let club = clubsData[i];

                        // Создание метки с пользовательским макетом балуна.
                        clubsPlacemarks[club.data.id] = new ymaps.Placemark(club.coordinates, {
                            balloonTitle: `<div class="map-balloon__title">${club.title.text}</div>`,
                            balloonAddress: club.address_full && club.address_full !== '' && `<p class="map-balloon__item map-balloon__item--address">${club.address_full}</p>`,
                            balloonWorkHours: club.work_hours && club.work_hours.items && club.work_hours.items.length > 0 ?
                                `<div class="map-balloon__item map-balloon__item--time">
                                Работаем ${club.work_hours.items.join(', ')}
                        </div>` : null,
                            balloonTel: club.tel && club.tel !== '' && `<a class="map-balloon__item map-balloon__item--tel" href="tel:${club.tel.split('').map(item => item.split('').filter(el => el !== '' && el !== '(' && el !== ')' && el !== '-')).join('')}">${club.tel}</a>`,
                        }, {
                            iconImageHref: 'assets/images/icons/map-pin.svg',
                            iconLayout: "default#image",
                            iconImageSize: [48, 56],
                            iconImageOffset: [-24, -56],
                            balloonShadow: false,
                            balloonLayout: warehouseBalloonLayout,
                            balloonPanelMaxMapArea: 0
                        });
                        clubsMap.geoObjects.add(clubsPlacemarks[club.data.id]);

                        GeoObjects[i] = clubsPlacemarks[club.data.id];

                        clubsMap.geoObjects.events.add('click', function (e) {
                            //clubsMap.setZoom(5);
                            const target = e.get('target');
                            clubsMap.setCenter(target.geometry._coordinates);
                        });

                        clubsMap.events.add('click', function (e) {
                            clubsMap.balloon.close();
                        });
                    }

                    clusterer.add(GeoObjects);
                    clubsMap.geoObjects.add(clusterer);

                    clubsMap.setBounds(clusterer.getBounds(), {
                        checkZoomRange: true,
                        zoomMargin: 38,
                        zoom: 5
                    });

                    $('body').on('click', '.region-btn', function () {
                        const $regionBtn = $(this);
                        const club = clubsData && clubsData.find(item => item.data.id == $regionBtn.attr('data-id'));

                        //clubsMap.setZoom(7);
                        clubsMap.setCenter(club.coordinates);
                        clubsPlacemarks[club.data.id].balloon.open();

                        window.scrollTo({
                            top: document.querySelector('#clubs-map').getBoundingClientRect().top,
                            behavior: 'smooth'
                        });
                    });
                });
            }

            if (response.error) {
                $('.warehouse').remove();
            }
        }).fail(function (response) {
            console.error(`HTTP error ${response.status}`);
        });
    },
};
