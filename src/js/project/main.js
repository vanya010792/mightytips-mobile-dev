document.addEventListener("DOMContentLoaded", function() {

    document.querySelector('.js-search')
        .addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.mt-popup__search').style.display = 'block';
        });
    document.querySelector('.mt-popup__search_close')
        .addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.mt-popup__search').style.display = 'none';
        });
    document.querySelector('.mt-popup__search_overlay')
        .addEventListener('click', function () {
            document.querySelector('.mt-popup__search').style.display = 'none';
        });

    document.querySelector('.mt-head__toggle')
        .addEventListener('click', function () {
            if (this.classList.contains('mt-head__toggle--active')) {
                this.classList.remove('mt-head__toggle--active');
                document.querySelector('.mt-head__nav_wrap').style.display = 'none';
            } else {
                this.classList.add('mt-head__toggle--active');
                document.querySelector('.mt-head__nav_wrap').style.display = 'block';
            }
        });
    for( var a = 0; a < document.querySelectorAll('.mt-head__nav_dropdown').length; a++ ) {
        document.querySelectorAll('.mt-head__nav_dropdown')[a].style.display = 'none';
    }

    var arrPlus = document.querySelectorAll('.mt-head__nav_item>a span');

    document.querySelector('.mt-head__nav_list')
    .addEventListener('click', function (e) {
        for( var b = 0; b < arrPlus.length; b++ ) {
            if( arrPlus[b] === e.target ) {
                e.preventDefault();
                if( arrPlus[b].classList.contains('mt-head__nav_item--hover') ) {
                    arrPlus[b].parentNode.nextElementSibling.style.display = 'none';
                    arrPlus[b].classList.remove('mt-head__nav_item--hover');
                } else {
                    arrPlus[b].parentNode.nextElementSibling.style.display = 'block';
                    arrPlus[b].classList.add('mt-head__nav_item--hover');
                }
            }
        }
    });

    if( !!document.querySelector('.mt-faq__wrap') ) {
        document.querySelector('.mt-faq__wrap').addEventListener('click', function (e) {
            var arrFaqTitle = this.querySelectorAll('.mt-faq__title');
            for (var a = 0; a < arrFaqTitle.length; a++) {
                if (arrFaqTitle[a] === e.target) {
                    if (arrFaqTitle[a].classList.contains('mt-faq__title--active')) {
                        arrFaqTitle[a].classList.remove('mt-faq__title--active');
                        arrFaqTitle[a].nextElementSibling.style.display = 'none';
                    } else {
                        arrFaqTitle[a].classList.add('mt-faq__title--active');
                        arrFaqTitle[a].nextElementSibling.style.display = 'block';
                    }
                }
            }
        });
    }

    if( document.querySelector('.mt-vote__percent') ) {
        var progressInterval = setInterval(function () {
            var item = document.querySelectorAll('.mt-vote__percent');
            var lineProgress = document.querySelectorAll('.mt-vote__progress');
            if (item[0].dataset.percent !== '') {
                for (var a = 0; a < item.length; a++) {
                    var dataP = +item[a].dataset.percent;
                    item[a].innerHTML = dataP + '%';
                    lineProgress[a].style.width = dataP + '%';
                }
                clearInterval(progressInterval);
            }
        }, 100);
    }

    if( document.querySelector( '.mt-popup__special' ) ) {
        document.querySelector( '.mt-popup__special_overlay' )
        .addEventListener( 'click', function () {
            document.querySelector( '.mt-popup__special' ).classList.remove( 'mt-popup__special--active' );
        });
        document.querySelector( '.mt-popup__special_close' )
            .addEventListener( 'click', function () {
                document.querySelector( '.mt-popup__special' ).classList.remove( 'mt-popup__special--active' );
            });
    }
    if( document.querySelector( '.mt-popup__bonus' ) ) {
        document.querySelector( '.mt-popup__bonus_close' )
            .addEventListener( 'click', function () {
                document.querySelector( '.mt-popup__bonus' ).classList.remove( 'mt-popup__bonus--active' );
            });
        document.querySelector( '.mt-popup__bonus_overlay' )
            .addEventListener( 'click', function () {
                document.querySelector( '.mt-popup__bonus' ).classList.remove( 'mt-popup__bonus--active' );
            });
    }
});