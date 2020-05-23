const form = document.getElementById('form');
const email = document.getElementById('email');

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success message
function showSuccess(inpute) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(email.value === '') {
        showError(email, 'Please provide a valid email address');
    } else showSuccess(email);
})