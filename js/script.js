const form = document.querySelector('form');
    const firstName = document.querySelector('input[name="firstName"]');
    const lastName = document.querySelector('input[name="lastName"]');
    const email = document.querySelector('input[name="email"]');
    const phone = document.querySelector('input[name="phone"]');
    const siteNeeds = document.querySelector('input[name="siteNeeds"]');
    const message = document.querySelector('textarea');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    form.addEventListener('submit', function(event) {
        let isValid = true;
        let errorMessage = '';

        if (firstName.value.trim() === '') {
            isValid = false;
            errorMessage += 'Por favor, preencha o primeiro nome.\n';
        }

        if (lastName.value.trim() === '') {
            isValid = false;
            errorMessage += 'Por favor, preencha o último nome.\n';
        }

        if (email.value.trim() === '') {
            isValid = false;
            errorMessage += 'Por favor, preencha o email.\n';
        } else if (!validateEmail(email.value)) {
            isValid = false;
            errorMessage += 'Por favor, insira um email válido.\n';
        }

        if (phone.value.trim() === '') {
            isValid = false;
            errorMessage += 'Por favor, preencha o número de celular.\n';
        }

        if (siteNeeds.value.trim() === '') {
            isValid = false;
            errorMessage += 'Por favor, preencha o campo "O que o seu site precisa?".\n';
        }

        if (message.value.trim() === '') {
            isValid = false;
            errorMessage += 'Por favor, preencha a mensagem.\n';
        }

        if (!isValid) {
            event.preventDefault();
            alert(errorMessage);
        }
    });