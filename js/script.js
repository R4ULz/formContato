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

    $(document).ready(function () {
        /*SCROLL REVIEW*/
        ScrollReveal().reveal("#ballPurple", {
          //pega o id da div que segura todos e faz a animação
          origin: "left",
          duration: 2000,
          distance: "10%",
        });
      
        ScrollReveal().reveal("#ballRose", {
          //pega o id ou class da div que segura todos e faz a animação
          origin: "right",
          duration: 1000,
          distance: "15%",
        });
      
        ScrollReveal().reveal("#tel", {
          origin: "left",
          duration: 2000,
          distance: "20%",
        });
        ScrollReveal().reveal("#email", {
          origin: "left",
          duration: 2300,
          distance: "20%",
        });
        ScrollReveal().reveal("#loc", {
          origin: "left",
          duration: 2600,
          distance: "20%",
        });
     
        ScrollReveal().reveal("#chef", {
          origin: "left",
          duration: 2500,
          distance: "20%",
        });
      
        ScrollReveal().reveal("#dep01", {
          origin: "right",
          duration: 900,
          distance: "10%",
        });
      
        ScrollReveal().reveal("#dep02", {
          origin: "right",
          duration: 1500,
          distance: "10%",
        });
      });