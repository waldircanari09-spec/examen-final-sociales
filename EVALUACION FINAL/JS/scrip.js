(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        form.querySelector(':invalid').focus();
      } else {
          alert('¡Enviado con éxito!');
      }
      form.classList.add('was-validated')
    }, false)
  })
})()