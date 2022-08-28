(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
        }
    
            form.classList.add('was-validated')
        }, false)
    });
    // const register = document.querySelector('#register');
    //     register.addEventListener('click', function(){
    //         Swal.fire({
    //             title: 'Success!',
    //             text: 'You have successfully registered!',
    //             icon: 'success',
    //         })
    //     });
})()