const slider = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slide = gallerySlider.querySelectorAll(".slide"),
        singleDot = document.querySelectorAll(".dot"),
        dots = document.querySelectorAll(".slider-dots > li");

    for (let i = 1; i < slide.length; i++) {
        slide[i].style.display = 'none';
        slide[i].style.opacity = 0;
    }

    let currentSlide = 0,
        interval;

    const prevSlide = (index) => {
        slide[index].style.display = 'none';
        slide[index].style.opacity = 0;
        dots[index].classList.remove('slick-active');

    };

    const nextSlide = (index) => {
        slide[index].style.display = 'block';
        slide[index].style.opacity = 1;
        dots[index].classList.add('slick-active');
    };

    const autoPlaySlide = () => {

        prevSlide(currentSlide);
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(currentSlide);
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };

    gallerySlider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        if (!target.matches('.slider-arrow, .dot')) {
            return
        };

        prevSlide(currentSlide);
        if (target.matches('.next')) {
            currentSlide++;
        } else if (target.matches('.prev')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            singleDot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(currentSlide);

    });

    gallerySlider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.slider-arrow') || event.target.matches('.dot')) {
            stopSlide();
        }
    });
    gallerySlider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.slider-arrow') || event.target.matches('.dot')) {
            startSlide();
        }
    });

    startSlide()
}
export default slider;