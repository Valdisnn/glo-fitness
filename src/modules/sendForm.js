const sendForm = (idform) => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро свяжемся с вами!',
        policyMessage = 'Согласитесь на обработку персональных данных',
        form = document.getElementById(idform),
        thanksPopup = document.getElementById('thanks'),
        policyCheckbox = form.querySelector('input[type="checkbox"]'),
        inputName = form.querySelector('input[name="name"]'),
        inputPhone = form.querySelector('input[type="tel"]'),
        radioBtn = [...form.querySelectorAll('#footer_form input[type=radio]')];
    let price = document.querySelector('#price-total');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 16px';
    statusMessage.style.color = 'red';
    statusMessage.style.margin = '5px 0 0 0';
    const deleteMessage = () => {
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 5000);
    };
    if (policyCheckbox) {
        policyCheckbox.removeAttribute('required');
        inputName.removeAttribute('required');
        inputPhone.removeAttribute('required');
    }


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (inputName && (inputPhone.value == '' || inputName.value == '')) {
            form.appendChild(statusMessage);
            statusMessage.textContent = 'Необходимо заполнить все поля!';
            deleteMessage()
            return;
        }
        if (policyCheckbox && !policyCheckbox.checked) {
            form.appendChild(statusMessage);
            statusMessage.textContent = policyMessage;
            deleteMessage();
        } else {
            setData(event, form);
            setTimeout(() => {
                thanksPopup.style.display = 'none';
            }, 5000);
            clearInput(form);
        }
    });

    const clearInput = () => {
        let inputs = [...form.querySelectorAll('input[type="text"]'), ...form.querySelectorAll('input[type="tel"]')];
        inputs.forEach((key) => {
            key.value = '';
        });
        if (policyCheckbox) {
            policyCheckbox.checked = false;
        }
        statusMessage.textContent = '';
    }
    thanksPopup.addEventListener('click', (event) => {
        if (event.target.matches('.overlay') || event.target.matches('[class *= close]')) {
            thanksPopup.style.display = 'none';
        }
    });

    const thanks = (message) => {
        thanksPopup.querySelector('p').textContent = message;
        thanksPopup.style.display = 'block';
    };
    form.addEventListener('change', () => {
        if (radioBtn[0] || radioBtn[1]) {
            if (radioBtn[0].checked) {
                radioBtn[1].checked = false;
            } else {
                radioBtn[0].checked = false;
                radioBtn[1].checked = true;
            }
        }
    });


    const setData = (event, form) => {
        event.preventDefault();

        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        if (form.id == 'card_order') {
            body.price = price.textContent;
        }
        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200')
                }
                thanks(successMessage);
            })
            .catch((error) => {
                thanks(errorMessage);
                console.log(error);
            });
    }
};

export default sendForm;