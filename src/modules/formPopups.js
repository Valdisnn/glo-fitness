const formPopups = () => {
    const appointmentForm = document.querySelector('div#free_visit_form'),
        callbackForm = document.querySelector('div#callback_form'),
        giftForm = document.querySelector('#gift'),
        phone = document.querySelector('#callback_footer_form-phone');

    document.body.addEventListener('click', (event) => {
        if (event.target.matches('.open-popup')) {
            appointmentForm.style.display = 'block';
        } else if (event.target.matches('.callback-btn')) {
            if (!event.target.closest('#footer_form')) {
                callbackForm.style.display = 'block';
            }
        } else if (event.target.closest('.fixed-gift')) {
            event.target.style.display = 'none';
            giftForm.style.display = 'block';
        } else if (event.target.matches('.overlay') || event.target.matches('[class *= close]')) {
            const popups = document.querySelectorAll('.popup');
            popups.forEach((item) => {
                item.style.display = 'none';
            });
        }
    });
};

export default formPopups;