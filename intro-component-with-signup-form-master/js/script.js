const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

//  Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success message 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    if(firstName.value === '') {
        showError(firstName, 'First Name cannot be empty');
    } else {
        showSuccess(firstName);
    }

    if(firstName.value === '') {
        showError(lastName, 'Last Name cannot be empty');
    } else {
        showSuccess(lastName);
    }

    if(email.value === '') {
        showError(email, 'Looks like this is not an email');
    } else if(!isValidEmail(email.value)) {
        showError(email, 'Looks like this is not an email')
    } else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'Password cannot be empty');
    } else {
        showSuccess(password);
    }

});
