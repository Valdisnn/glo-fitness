const mainSlider = () => {
    const slider = document.querySelector('.main-slider'),
        allSlides = slider.querySelectorAll('.slide');

    let count = 0;
    const slide = () => {
        allSlides[count].style.display = 'none';
        count++;
        if (count >= allSlides.length) {
            count = 0;
        }
        allSlides[count].style.display = 'flex';
    }

    const start = (time = 2000) => {
        setInterval(slide, time);
    }
    start(2000);
};

export default mainSlider;