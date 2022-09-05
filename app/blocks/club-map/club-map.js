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
                        `<div class="map-balloon" style="width: auto">
                            $[properties.balloonTitle]
                            $[properties.balloonAddress]
                            $[properties.balloonWorkHours]
                            <a class="btn map-balloon__btn" href="#">Подробнее о клубе</a>
                        </div>`
                    );

                    //let warehousePlacemark;
                    let clubsPlacemarks = {};
                    var GeoObjects = [];
                    for (let i = 0; i < clubsData.length; i++) {
                        let club = clubsData[i];
                        console.log(club);

                        // Создание метки с пользовательским макетом балуна.
                        clubsPlacemarks[club.data.id] = new ymaps.Placemark(club.coordinates, {
                            balloonTitle: `<div class="map-balloon__title">${club.title.text}</div>`,
                            balloonAddress: club.address_full && club.address_full !== '' && `<p>${club.address_full}</p>`,
                            balloonWorkHours: club.work_hours && club.work_hours.items && club.work_hours.items.length > 0 ?
                                `<div class="map-balloon__item map-balloon__item--time">
                                Работаем ${club.work_hours.items.join(', ')}
                        </div>` : null,
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

                    $('body').on('click', '.map-info-table__item', function () {
                        const $btn = $(this);
                        const warehouse = clubsData && clubsData.filter(item => item.data.id == $(this).attr('data-id'))[0];

                        $('.map-info-table__item.active').removeClass('active');
                        $btn.addClass('active');
                        clubsMap.setZoom(7);
                        clubsMap.setCenter(warehouse.coordinates.map((coord, i) => i == 1 ? coord + 2 : coord));
                        clubsPlacemarks[warehouse.data.id].balloon.open();
                        clubsMap.geoObjects.remove(multiRoute);
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
