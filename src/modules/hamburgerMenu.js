const hamburgerMenu = () => {
    const navigationMenu = document.querySelector('.top-menu'),
        popupMenu = document.querySelector('.popup-menu');

    ['scroll', 'resize'].forEach(evt =>
        window.addEventListener(evt, () => {
            if (window.pageYOffset > 130 && window.innerWidth < 768) {
                navigationMenu.style.position = 'fixed';
            } else {
                navigationMenu.style.position = '';
            }
        }, false)
    );
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.menu-button')) {
            popupMenu.style.display = 'flex';
        }
        if (target.closest('.close-menu-btn') || target.closest('.scroll')) {
            popupMenu.style.display = 'none';
        }
    });

}

export default hamburgerMenu;