const carousel = () => {
    class sliderCarousel {
        constructor({
            main,
            wrap,
            next,
            prev,
            infinity = false,
            position = 0,
            slidesToShow = 4,
            responsive = []
        }) {
            if (!main || !wrap) {
                console.warn('SliderCarousel: Необохдимо передать свойства "main" и "wrap"!');
            }

            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = this.wrap.querySelectorAll('.slide');
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                infinity: infinity,
                widthSlide: Math.floor(100 / this.slidesToShow),
                maxPosition: this.slides.length - this.slidesToShow
            };
            this.responsive = responsive;
        }

        init() {
            this.addClass();
            this.addStyle();

            if (this.prev && this.next) {
                this.controlSLider();
            } else {
                this.controlSLider();
            }

            if (this.responsive) {
                this.responseInit();
            }
        }

        responseInit() {
            const slidesToShowDefault = this.slidesToShow,
                allResponse = this.responsive.map(item => item.breakpoint),
                maxResponse = Math.max(...allResponse);

            const checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;

                if (widthWindow < maxResponse) {
                    for (let i = 0; i < allResponse.length; i++) {
                        if (widthWindow < allResponse[i]) {
                            this.slidesToShow = this.responsive[i].slideToShow;
                            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                            this.addStyle();
                        } else {
                            this.slidesToShow = slidesToShowDefault;
                            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                            this.addStyle();
                        }
                    }
                }
            };

            checkResponse();

            window.addEventListener('resize', checkResponse);
        }

        addClass() {
            this.main.classList.add('glo-slider');
            this.wrap.classList.add('glo-slider__wrap');
            for (const item of this.slides) {
                item.classList.add('glo-slider__item');
            }
        }

        addStyle() {
            let style = document.getElementById('slider-carousel-style');
            if (!style) {
                style = document.createElement('style');
                style.id = 'slider-carousel-style';
            }
            style.textContent = `
                .glo-slider {
                    position: relative !important;
                    overflow: hidden !important;
                }
                .glo-slider__wrap {
                    padding: 0px !important;
                    display: flex !important;
                    transition: transform 0.5s !important;
                    will-change: transform !important;
                }
                .glo-slider__item {
                    flex: 0 0 ${this.options.widthSlide}% !important;
                    margin: 0 auto !important;
                }
            `;
            document.head.append(style);
        }

        controlSLider() {
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }

        prevSlider() {
            if (this.options.infinity || this.options.position > 0) {
                --this.options.position;
                if (this.options.position < 0) {
                    this.options.position = this.options.maxPosition;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }

        }

        nextSlider() {
            if (this.options.infinity || this.options.position < this.options.maxPosition) {
                ++this.options.position;
                if (this.options.position > this.options.maxPosition) {
                    this.options.position = 0;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }

        }
    }

    const options = {
        main: '#services>.wrapper',
        wrap: '.services-slider',
        prev: '.wrap-wrap .prev',
        next: '.wrap-wrap .next',
        slidesToShow: 4,
        infinity: true,
        responsive: [{
                breakpoint: 1024,
                slideToShow: 3
            },
            {
                breakpoint: 768,
                slideToShow: 2
            },
            {
                breakpoint: 576,
                slideToShow: 1
            },
        ]
    };

    const carousel = new sliderCarousel(options);
    carousel.init();
}

export default carousel;