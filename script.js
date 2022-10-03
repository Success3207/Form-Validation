const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('click', (e) => {
    e.preventDefault();


    checkInputs();
} )

function checkInputs() {
    //get the values from the inputs

    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;

    //username
        if (usernameValue === '') {
            //show error
            //add error class

            setErrorFor(username, 'Username cannot be blank');
        } else{
            //add success class
            setSuccessFor(username);
        }

        //email
        if (emailValue === ''){
            setErrorFor(email, 'Email cannot be blank')
        }else{
            setErrorFor(email)
        }

        //password
        if (passwordValue === '' || password.value.length <= 5) {
            setErrorFor(password, 'Password cannot be blank');
        }
        else{
            setSuccessFor(password)
        }

        //password2
        if (password2Value === '') {
            setErrorFor(password2, 'Password cannot be blank');
            
        }else if(password2Value !== password2Value){
            setErrorFor(password2, 'Password does not match');
        }else{
            setSuccessFor(password2)
        }
};

function setErrorFor(input, message) {
    const formControl = input.parentElement; //form-control in HTML
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
