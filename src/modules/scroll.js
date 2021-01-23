const scroll = () => {
    const goToTopBtn = document.querySelector('#totop');
    goToTopBtn.style.display = 'none';

    window.addEventListener('scroll', (e) => {
        e.preventDefault();
        if (window.pageYOffset > 680) {
            goToTopBtn.style.display = 'block';
        } else {
            goToTopBtn.style.display = 'none';
        }
    })

    goToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

export default scroll;