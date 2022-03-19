new LazyLoad();
//new WOW().init();
//app.burger.init();
//app.slider.init();
//app.menu.init();
//app.popup.init();
//app.validation.init();


//smoooth scroll to section
/* document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: document.getElementById(link.getAttribute('data-section')).offsetTop,
            behavior: "smooth"
        });
        body.classList.remove('_lock');
        burgerBtn.classList.remove('.is-active');
        burgerMenu.classList.remove('.is-active');
    });
}); */

// Custom jquery select
/* $('.select__title').on('click', function () {
    $(this).parents('.').siblings().find('.select__title').removeClass('select__title--active');
    $(this).parents('.').siblings().find('.select__content').slideUp('300');
    $(this).toggleClass('select__title--active');
    $(this).next().slideToggle('300');
});

$('.select__option').on('click', function () {
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().removeClass('select__title--active');
    $(this).parent().slideUp('300');
}); */

// Custom js select
/* let selectItem = document.querySelector('.select');
let selectTitle = selectItem.querySelector('.select__title');
let selectLabels = selectItem.querySelectorAll('.select__label');
// Toggle menu
selectTitle.addEventListener('click', () => {
    if ('active' === selectItem.getAttribute('data-state')) {
        selectItem.setAttribute('data-state', '');
    } else {
        selectItem.setAttribute('data-state', 'active');
    }
});
// Close when click to option
for (let i = 0; i < selectLabels.length; i++) {
    selectLabels[i].addEventListener('click', (e) => {
        selectTitle.textContent = e.target.textContent;
        selectItem.setAttribute('data-state', '');
    });
} */

// js counter +/-
/* const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');

if (minusBtn) {
    minusBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let input = this.nextElementSibling;
        let value = parseInt(input.value);
        while (value > 0) {
            value--;
            break;
        }
        input.value = value;
    });
}
if (plusBtn) {
    plusBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let input = this.previousElementSibling;
        let value = parseInt(input.value);
        value++;
        input.value = value;
    });
} */

// popups
//jquery
/* $('.open-popup').on('click', function () {
    $('body').addClass('_lock');
    $('.overlay').fadeIn('slow');
    $(`#${$(this).data('popup')}-popup`).fadeIn('slow');
});
$('.popup__close').on('click', function () {
    $('body').removeClass('_lock');
    $('.overlay').fadeOut('slow');
    $(this).parent().fadeIn('slow');
}); */

//js
/* const overlay = document.querySelector('.overlay');
const openPopup = document.querySelectorAll('.open-popup');
const popup = document.querySelector('#popup');
const thanksPopup = document.querySelector('#thanks');
const popupClose = document.querySelectorAll('.popup__close');
openPopup.addEventListener('click', function () {
    body.classList.add('_lock');
    overlay.style.display = 'block';
    document.getElementById(this.getAttribute('data-popup')).style.display = 'block';
});
popupClose.forEach(close => {
    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        close.parentElement.style.display = 'none';
        body.classList.remove('_lock');
    });
});
document.querySelectorAll('.popup').forEach(popup => {
    let popupForm = popup.querySelector('form');
    popupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        popupForm.querySelectorAll('input').forEach(input => {
            input.value = '';
        });
        popupForm.parentElement.style.display = 'none';
        thanksPopup.style.display = 'block';
    });
}); */
// magnific
/* $('.open-video').magnificPopup({
    type: 'iframe',
    preloader: false,
});


$('.popup-link').magnificPopup({
    type: 'inline' // к попапу добавить класс mfp-hide // Через кнопку data-mfp-src="#call_me" добавить кнопке
});

$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded',
    }
}); */

/* const searchForm = document.querySelector('.search-form');
const searchInput = searchForm.querySelector('.search-form__input');
const searchBtn = document.querySelector('.header__search-btn');
searchBtn.addEventListener('click', function () {
    searchForm.classList.add('search-form--active');
});

document.addEventListener('mouseup', (e) => {
    if (searchForm != e.target && searchInput != e.target) {
        searchForm.classList.remove('search-form--active');
    }
}); */

// ymaps
/* ymaps.ready(init);

function init() {

    var myMap = new ymaps.Map("map", {
        center: [55.6938, 37.6001],
        zoom: 4,
        controls: ['zoomControl']
    });


    var myGeoObjects = [];

    myGeoObjects[0] = new ymaps.Placemark([55.755819, 37.617644], {
        clusterCaption: 'Заголовок',
        //balloonContentBody: 'Текст в балуне',
    }, {
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/pin.svg',
        // Размеры метки.
        iconImageSize: [45, 50],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-3, -42]
    });

    myGeoObjects[1] = new ymaps.Placemark([59.939099, 30.315877], {
        clusterCaption: 'Заголовок',
        //balloonContentBody: 'Текст в балуне',
    }, {
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/pin.svg',
        // Размеры метки.
        iconImageSize: [45, 50],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-23, -42]
    });

    myGeoObjects[2] = new ymaps.Placemark([45.035470, 38.975313], {
        clusterCaption: 'Заголовок',
        //balloonContentBody: 'Текст в балуне',
    }, {
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/pin.svg',
        // Размеры метки.
        iconImageSize: [45, 50],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-16, -42]
    });

    var clusterIcons = [{
        href: '/images/pointer.png',
        size: [31, 40],
        offset: [0, 0]
    }];

    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
        // Устанавливаем стандартный макет балуна кластера "Карусель".
        clusterBalloonContentLayout: 'cluster#balloonCarousel',
        // Устанавливаем собственный макет.
        //clusterBalloonItemContentLayout: customItemContentLayout,
        // Устанавливаем режим открытия балуна. 
        // В данном примере балун никогда не будет открываться в режиме панели.
        clusterBalloonPanelMaxMapArea: 0,
        // Устанавливаем размеры макета контента балуна (в пикселях).
        clusterBalloonContentLayoutWidth: 300,
        clusterBalloonContentLayoutHeight: 200,
        // Устанавливаем максимальное количество элементов в нижней панели на одной странице
        clusterBalloonPagerSize: 5
        // Настройка внешего вида нижней панели.
        // Режим marker рекомендуется использовать с небольшим количеством элементов.
        // clusterBalloonPagerType: 'marker',
        // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
        // clusterBalloonCycling: false,
        // Можно отключить отображение меню навигации.
        // clusterBalloonPagerVisible: false
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
} */