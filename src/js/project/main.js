document.addEventListener("DOMContentLoaded", function() {

    document.querySelector('.js-search').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.mt-popup__search').style.display = 'block';
    });
    document.querySelector('.mt-popup__search_close').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.mt-popup__search').style.display = 'none';
    });
    document.querySelector('.mt-popup__search_overlay').addEventListener('click', function () {
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
    for (var a = 0; a < document.querySelectorAll('.mt-head__nav_dropdown').length; a++) {
        document.querySelectorAll('.mt-head__nav_dropdown')[a].style.display = 'none';
    }

    var arrPlus = document.querySelectorAll('.mt-head__nav_item>a span, .mt-head__nav_dropdown__item>a span');
    document.querySelector('.mt-head__nav_list')
        .addEventListener('click', function (e) {
            for (var b = 0; b < arrPlus.length; b++) {
                if (arrPlus[b] === e.target) {
                    e.preventDefault();
                    if (arrPlus[b].classList.contains('mt-head__nav_item--hover')) {
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

    if( document.querySelector( '.mt-bookmakersPage__filters' ) ) {
        document.querySelector( '.js-sorting' )
            .addEventListener( 'click', function (e) {
                e.preventDefault();
                if( this.parentNode.classList.contains( 'mt-bookmakersPage__btn--sorting' ) ) {
                    this.parentNode.classList.remove( 'mt-bookmakersPage__btn--sorting' );
                } else {
                    this.parentNode.classList.remove( 'mt-bookmakersPage__btn--filter' );
                    this.parentNode.classList.add( 'mt-bookmakersPage__btn--sorting' )
                }
            })
        document.querySelector( '.js-filter' )
            .addEventListener( 'click', function (e) {
                e.preventDefault();
                if( this.parentNode.classList.contains( 'mt-bookmakersPage__btn--filter' ) ) {
                    this.parentNode.classList.remove( 'mt-bookmakersPage__btn--filter' );
                } else {
                    this.parentNode.classList.remove( 'mt-bookmakersPage__btn--sorting' );
                    this.parentNode.classList.add( 'mt-bookmakersPage__btn--filter' )
                }
            })
        jQuery( '.mt-bookmakersPage__filters .title' ).click( function () {
            if( jQuery( this ).hasClass( 'title--active' ) ) {
                jQuery( this ).removeClass( 'title--active' );
            } else {
                jQuery( this ).addClass( 'title--active' );
            }
        });
    }

    if( document.querySelector( '.mt-content-drop' ) ) {
        document
            .querySelector( '.mt-content-drop' )
            .addEventListener( 'click', function (e) {
            e.preventDefault();
            if( this.classList.contains( 'mt-content-drop--active' ) ) {
                this.classList.remove( 'mt-content-drop--active' );
            } else {
                this.classList.add( 'mt-content-drop--active' );
            }
        });
    }

    if( document.querySelector( '.mt-bookmakers-card__content .panel-comments' ) ) {
        document
            .querySelector( '.mt-bookmakers-card__content .panel-comments .mt-btn__blue' )
            .addEventListener( 'click', function (e) {
            e.preventDefault();
            if( this.classList.contains( 'mt-btn__blue--active' ) ) {
                this.classList.remove('mt-btn__blue--active');
                document
                    .querySelector( '.mt-bookmakers-card__content .write-comment' )
                    .style.display = 'none';
            } else {
                document
                    .querySelector('.mt-bookmakers-card__content .details-comment')
                    .style.display = 'none';
                document
                    .querySelector( '.mt-bookmakers-card__content .panel-comments .panel-comments__link' )
                    .classList.remove( 'panel-comments__link--active' );
                this.classList.add('mt-btn__blue--active');
                document
                    .querySelector('.mt-bookmakers-card__content .write-comment')
                    .style.display = 'block';
            }
        });
        document
            .querySelector( '.mt-bookmakers-card__content .panel-comments .panel-comments__link' )
            .addEventListener( 'click', function (e) {
            e.preventDefault();
            if( this.classList.contains( 'panel-comments__link--active' ) ) {
                this.classList.remove('panel-comments__link--active');
                document
                    .querySelector('.mt-bookmakers-card__content .details-comment')
                    .style.display = 'none';
            } else {
                document
                    .querySelector('.mt-bookmakers-card__content .write-comment')
                    .style.display = 'none';
                document
                    .querySelector( '.mt-bookmakers-card__content .panel-comments .mt-btn__blue' )
                    .classList.remove( 'mt-btn__blue--active' );
                this.classList.add('panel-comments__link--active');
                document
                    .querySelector('.mt-bookmakers-card__content .details-comment')
                    .style.display = 'block';
            }
        });
        jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).on( 'click', function (e) {
            let starsAll = jQuery( this ).children( '.star' );
            for( let a = 0; a < starsAll.length; a++ ) {
                if( starsAll[a] === e.target ) {
                    jQuery( this ).attr( 'class', `stars stars--${a + 1}` );
                    jQuery( this ).siblings( '.number' ).children( '.value' ).html( a + 1 );
                    jQuery( this ).siblings( '.input-value' ).val( a + 1 );
                }
            }
            let curPos = function() {
                for (let b = 0; b < jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).length - 1; b++) {
                    if ( jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).eq(b).siblings('.input-value').val() === '' ) {
                        return false
                    }
                }
            }
            if( curPos() !== false ) {
                jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).eq( jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).length - 1 ).children( '.star' ).attr( 'class', 'star star--0' );
                let summStar = 0;
                for( let a = 0; a < jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).length; a++ ) {
                    summStar += +jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).eq(a).siblings('.input-value').val();
                }
                summStar = summStar / ( jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).length - 1 );
                summStar = summStar.toFixed( 1 );
                for( let a = 0; a < +summStar[0]; a++ ) {
                    jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).eq( jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).length - 1 ).children( '.star' ).eq( a ).attr( 'class', 'star star--10' );
                }
                if( +summStar[2] !== 0 ) {
                    console.log( 1 );
                    jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).eq(jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).length - 1).children('.star').eq(summStar[0]).attr('class', `star star--${summStar[2]}`);
                    jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).eq( jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).length - 1 ).siblings('.number').children( '.value' ).html( summStar );
                } else {
                    console.log(2);
                    summStar = +summStar[0]
                    jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).eq( jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).length - 1 ).siblings('.number').children( '.value' ).html( summStar );

                }
                jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).eq( jQuery( '.mt-bookmakers-card__content .write-comment .form__rating_item .stars' ).length ).siblings('.input-value').val( summStar );
            }
        });
    }

    if( document.querySelector( '.mt-bookmakers-card__payment' ) ) {
        jQuery( '.mt-bookmakers-card__payment .tabs__item' ).click( function () {
            let indexItem = jQuery( this ).index();
            jQuery( '.mt-bookmakers-card__payment .tabs__item' ).removeClass( 'tabs__item--active' );
            jQuery( '.mt-bookmakers-card__payment .page' ).removeClass( 'page--active' );
            jQuery( this ).addClass( 'tabs__item--active' );
            jQuery( '.mt-bookmakers-card__payment .page' ).eq( indexItem ).addClass( 'page--active' );
        });
    }

    if( document.querySelector( '.anchor' ) ) {
        jQuery("a.anchor").click(function() {
            var elementClick = jQuery(this).attr("href")
            var destination = jQuery(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        });
    }

    if( document.querySelector( '.mt-leaguePage__predictions .predictions__list' ) ) {
        $( '.mt-leaguePage__predictions .predictions__btn-group .btn-group__title' ).click( function () {
            if( jQuery( this ).parent().hasClass( 'btn-group__wrap--active' ) ) {
                jQuery( this ).parent().removeClass( 'btn-group__wrap--active' );
            } else {
                jQuery( this ).parent().addClass( 'btn-group__wrap--active' );
            }
        });
    }

});