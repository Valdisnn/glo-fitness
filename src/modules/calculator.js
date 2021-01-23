const calculator = () => {
    const form = document.getElementById('card_order'),
        priceTotal = document.querySelector('#price-total'),
        promoInput = document.querySelector('input[placeholder = "Промокод"]'),
        mozaika = document.querySelector('#card_leto_mozaika'),
        schelkovo = document.querySelector('#card_leto_schelkovo'),
        prices = {
            mozaika: {
                1: 1999,
                6: 9900,
                9: 13900,
                12: 19900,
            },
            schelkovo: {
                1: 2999,
                6: 14990,
                9: 21990,
                12: 24990,
            }
        };

    //|| window.location.pathname == "/fitness/schelkovo.html"
    let page = document.querySelector('html').id;
    let amount = 1;
    form.addEventListener('change', (event) => {
        if (page && event.target.matches('input[type="radio"]')) {
            amount = event.target.value;
            if (page == "mozaika") {
                priceTotal.innerHTML = prices.mozaika[amount];
            } else if (page == "schelkovo") {
                priceTotal.innerHTML = prices.schelkovo[amount];
            }
        } else if (!page && event.target.matches('input')) {
            const checked = () => {
                if (schelkovo.checked) {
                    priceTotal.innerHTML = prices.schelkovo[amount];
                } else if (mozaika.checked) {
                    priceTotal.innerHTML = prices.mozaika[amount];
                }
            };

            const checkPromo = (promo) => {
                if (promoInput && promo.trim() === 'ТЕЛО2021') {
                    priceTotal.innerHTML = priceTotal.textContent - Math.floor(priceTotal.textContent * (30 / 100));
                }
            };
            if (!event.target.closest('.time')) {
                checked();
                if (event.target.matches('input[placeholder = "Промокод"]')) {
                    checkPromo(event.target.value);
                }
            } else {
                if (mozaika && mozaika.checked) {
                    amount = event.target.value;
                    priceTotal.innerHTML = prices.mozaika[event.target.value];
                }
                if (schelkovo && schelkovo.checked) {
                    amount = event.target.value;
                    priceTotal.innerHTML = prices.schelkovo[event.target.value];
                }
            }
        }

    })
}

export default calculator;