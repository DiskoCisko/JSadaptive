
function geoFindMe() {

    function success(position) {
  
      showPos(position);
      DG.then(function() {
        var map;

        map = DG.map('map', {
            center: [54.98, 82.89],
            zoom: 13
        });

        map.locate({setView: true, watch: true})
            .on('locationfound', function(e) {
                DG.marker([e.latitude, e.longitude]).addTo(map);
            })
            .on('locationerror', function(e) {
                DG.popup()
                  .setLatLng(map.getCenter())
                  .setContent('Доступ к определению местоположения отключён')
                  .openOn(map);
            });
    });

    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }


  function showPos(position) {
      console.dir(position.coords.latitude);
      console.dir(position.coords.longitude);
  }

 

// Дождёмся загрузки API и готовности DOM.


// function init (position) {
//     // Создание экземпляра карты и его привязка к контейнеру с
//     // заданным id ("map").
//     myMap = new ymaps.Map('map', {
//         // При инициализации карты обязательно нужно указать
//         // её центр и коэффициент масштабирования.
//         center: [position.coords.latitude, position.coords.longitude], 
//         zoom: 15
//     }, {
//         searchControlProvider: 'yandex#search'
//     }),
//     // Создаём макет содержимого.
//     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//         '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//     ),

//     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//         hintContent: 'Собственный значок метки',
//         balloonContent: 'Это красивая метка'
//     }, {
//         // Опции.
//         // Необходимо указать данный тип макета.
//         iconLayout: 'default#image',
//         // Своё изображение иконки метки.
//         iconImageHref: 'images/map-marker-solid.svg',
//         // Размеры метки.
//         iconImageSize: [30, 42],
//         // Смещение левого верхнего угла иконки относительно
//         // её "ножки" (точки привязки).
//         iconImageOffset: [-5, -38]
//     }),

    

// myMap.geoObjects
//     .add(myPlacemark);  

// }
  
geoFindMe();