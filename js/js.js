document.addEventListener('DOMContentLoaded', function() {

    var btn = document.querySelector('.button.podkl');
    var textP = document.querySelector('.test.container p');

    console.log(window.innerWidth)

    if(window.innerWidth <= 1150) {
        btn.innerHTML = 'Подключить за 47 грн'
       
        
    }
    if(window.innerWidth<=375){
        textP.innerHTML = 'Tестовый <span>тариф L за 47 грн</span> на две недели'
    }


        $('.big-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        margin: 15,
        autoplayTimeout: 3000,
        items: 5,
        stagePadding: 15,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            319:{
                items: 2,
                nav: false,
                loop: false,
                loop: true
            },
            410:{
                items: 3,
                nav: false,
                loop: false,
                loop: true
            },
            650:{
                items: 4,
                nav: false,
                loop: false,
                loop: true
            },

            1720:{
                items: 4,
                nav: false,
                loop: false,
                loop: true
            },
            
           

            
        }

    });
    $('.logo-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            320:{
                items: 4,
                nav: false,
                loop: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            },            
            1240: {
                items: 6,
                
            }

        }
    })
    $('.second-slider').owlCarousel({
        loop: true,
        nav:false,
        dots:false,
        items:1

    })


    $(".big-slider .item").hover(function () {
        $(".descr").css("opacity", "1");
    }, function () {
        $(".descr").css("opacity", "0");
    });
})