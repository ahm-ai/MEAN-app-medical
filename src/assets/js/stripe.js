function stripeInit() {
    // var stripe = Stripe('pk_test_eHnpnhQF8Y6aaTQu9M6VMAPp'); // use your test publishable key
    // var elements = stripe.elements();
    // console.log('Striped init loaded!!');
    $(function () {


        var stripe = Stripe('pk_test_eHnpnhQF8Y6aaTQu9M6VMAPp');
        var elements = stripe.elements();


        var card = elements.create('card', {
            iconStyle: 'solid',
            style: {
                base: {
                    iconColor: '#8898AA',
                    color: 'black',
                    lineHeight: '36px',
                    fontWeight: 300,
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: '16px',

                    '::placeholder': {
                        color: '#8898AA',
                    },
                },
                invalid: {
                    iconColor: '#e85746',
                    color: '#e85746',
                }
            },
            classes: {
                focus: 'is-focused',
                empty: 'is-empty',
            },
        });
        card.mount('#card-element');

        var inputs = document.querySelectorAll('input.field');
        Array.prototype.forEach.call(inputs, function (input) {
            input.addEventListener('focus', function () {
                input.classList.add('is-focused');
            });
            input.addEventListener('blur', function () {
                input.classList.remove('is-focused');
            });
            input.addEventListener('keyup', function () {
                if (input.value.length === 0) {
                    input.classList.add('is-empty');
                } else {
                    input.classList.remove('is-empty');
                }
            });
        });

        function setOutcome(result) {
            console.log(result);

            var successElement = document.querySelector('.success');
            var errorElement = document.querySelector('.error');
            successElement.classList.remove('visible');
            errorElement.classList.remove('visible');

            if (result.token) {
                // Use the token to create a charge or a customer
                // https://stripe.com/docs/charges
                successElement.querySelector('.token').textContent = result.token.id;
                successElement.classList.add('visible');
            } else if (result.error) {
                errorElement.textContent = result.error.message;
                errorElement.classList.add('visible');
            }
        }

        card.on('change', function (event) {
            setOutcome(event);
        });

        document.querySelector('form').addEventListener('submit', function (e) {
            e.preventDefault();
            var form = document.querySelector('form');
            var extraDetails = {
                name: form.querySelector('input[name=cardholder-name]').value,
            };
            console.warn('card', card);
            console.log('extraDetails', extraDetails);
            console.log(setOutcome);

            stripe.createToken(card, extraDetails).then(setOutcome);
        });

    });
}

// stripeInit();