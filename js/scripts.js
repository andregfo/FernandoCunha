/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('preferencia').addEventListener('change', function() {
        var personalizadoFields = document.getElementById('personalizado-fields');
        if (this.value === 'personalizado') {
            personalizadoFields.style.display = 'block';
        } else {
            personalizadoFields.style.display = 'none';
        }
    });
});
