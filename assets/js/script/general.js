/**
 * AllPage
 * @type {{init: AllPage.init}}
 */
const AllPage = function () {

    /**
     * Plugin
     */
    const pluginStart = function () {


	}

    /**
     * Header
     */
    const Header = function () {

        /**
         * Navbar Menu
         */
        $(document).on('click', '.header__btn_mobile', function(e) {
            e.preventDefault();

            $('body').toggleClass('menu__active');

        });

        /**
         * Search
         */
        $(document).on('click', '.btnSearch', function(e) {
            e.preventDefault();

            $('body').toggleClass('search__active');

        });

        /**
         * Search Mobile
         */
        $(document).on('click', '.btnSearchMobile', function(e) {
            e.preventDefault();

            $('body').toggleClass('search_mobile__active');

        });

    }

    /**
     * Logos
     */
    const Logos = function () {

        const swiper = new Swiper('.logos .swiper-container', {
            loop            : false,
            slidesPerView   : 2,
            spaceBetween    : 0,
            slidesPerGroup  : 2,
            watchOverflow   : true,
            watchSlidesVisibility: true,
            pagination: {
                el          : '.logos .swiper-pagination',
                clickable   : true,
            },
            navigation: {
                nextEl      : '.logos .swiper-button-next',
                prevEl      : '.logos .swiper-button-prev',
            },
            breakpoints: {
                1000: {
                    slidesPerView   : 6,
                    slidesPerGroup  : 6,
                    slideVisibleClass : 'active',
                },
                600: {
                    slidesPerView   : 4,
                    slidesPerGroup  : 4,
                    slideVisibleClass : 'active',
                },
                500: {
                    slidesPerView   : 3,
                    slidesPerGroup  : 3,
                    slideVisibleClass : 'active',
                },

            }
        });

    }

    /**
     * Sidebar
     */
    const Sidebar = function () {

        $(document).on('click', '.sidebarBtn', function(e) {
            e.preventDefault();

            $('body').toggleClass('sidebar_menu__active');

        });

    }

    /**
     * Catalog
     */
    const Catalog = function () {

        /**
         * Hover
         */
        $('.hoverImageCatalog').hover(function () {

            const   $this = $(this),
                    img_new = $this.data('src'),
                    $image = $this.parent().find('img');

            $image.attr('src', img_new);

        }, function (e) {

            const   $this = $(this),
                    img_def = $this.data('default'),
                    $image = $this.parent().find('img');

            $image.attr('src', img_def);

        });

    }

    /**
     * Init
     */
	return {
		init: function () {
			pluginStart();
            Header();
            Logos();
            Sidebar();
            Catalog();
		}
	};

}();

/**
 * HomePage
 * @type {{init: HomePage.init}}
 */
const HomePage = function () {

    /**
     * Intro
     */
    const Intro = function () {

        const swiper = new Swiper('.intro .swiper-container', {
            loop: true,
            pagination: {
                el: '.intro .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.intro .swiper-button-next',
                prevEl: '.intro .swiper-button-prev',
            },
        });


    }

    /**
     * Init
     */
    return {
        init: function () {
            Intro();
        }
    };

}();

/**
 * ObjectPage
 * @type {{init: ObjectPage.init}}
 */
const ObjectPage = function () {

    /**
     * Gallery
     */
    const Gallery = function () {

        const swiper = new Swiper('.object__gallery .swiper-container', {
            loop            : true,
            slidesPerView   : 1,
            spaceBetween    : 15,
            pagination: {
                el          : '.object__gallery .swiper-pagination',
                clickable   : true,
            },
            navigation: {
                nextEl      : '.object__gallery .swiper-button-next',
                prevEl      : '.object__gallery .swiper-button-prev',
            },
        });

    }

    /**
     * Related
     */
    const Related = function () {

        const swiper = new Swiper('.object__related-list .swiper-container', {
            loop            : false,
            slidesPerView   : 1,
            spaceBetween    : 25,
            slidesPerGroup  : 1,
            pagination: {
                el          : '.object__related-list .swiper-pagination',
                clickable   : true,
            },
            navigation: {
                nextEl      : '.object__related-list .swiper-button-next',
                prevEl      : '.object__related-list .swiper-button-prev',
            },
            breakpoints: {
                1000: {
                    slidesPerView: 3,
                    slidesPerGroup  : 3,
                },
                600: {
                    slidesPerView: 2,
                    slidesPerGroup  : 2,
                },
            }
        });

    }

    /**
     * Init
     */
    return {
        init: function () {
            Gallery();
            Related();
        }
    };

}();

/**
 * ready
 */
jQuery(document).ready(function() {
	AllPage.init();
    HomePage.init();
    ObjectPage.init();
});



