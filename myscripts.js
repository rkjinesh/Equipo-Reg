const firstName = document.getElementById('firstName');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const fnameError = document.getElementById('fnameError')
const lnameError = document.getElementById('lnameError')
const emailError = document.getElementById('emailError')
const phonenumberError = document.getElementById('phonenumberError')
const passwordError = document.getElementById('passwordError')
const cPasswordError = document.getElementById('cPasswordError')
const form = document.getElementById("form");




function checkFiestName(){
    if(!firstName.value){
        fnameError.style.display= 'block';
    }else{
        fnameError.style.display='none';
    }
    return value;
}


function checkLastName(){
    if(!lastname.value){
        lnameError.style.display= 'block';
    }else{
        lnameError.style.display='none';
    }
    return value;
}

function checkEmail(){
    if(!email.value){
        emailError.style.display= 'block';
    }else{
        emailError.style.display='none';
    }
    return value;
}

function checkPhonenum(){
    if(!phoneNumber.value){
        phonenumberError.style.display= 'block';
    }else{
        phonenumberError.style.display='none';
    }
    return value;
}

function checkPassword(){
    if(!password.value){
        passwordError.style.display= 'block';
    }else{
        passwordError.style.display='none';
    }
    return value;
}

function checkConfpassword(){
    if(!confirmPassword.value){
        cPasswordError.style.display= 'block';
    }else{
        cPasswordError.style.display='none';
    }
    return value;
}


form.addEventListener("submit" , (eve)=>{
    let message = [];
    eve.preventDefault();  
    let empty=true;
    if(!firstName.value){
        message.push('firstName')   
    }
    if(!lastname.value){
        message.push('lastname')   
    }
    if(!lastname.value){
        message.push('lastname')   
    }
    if(!email.value){
        message.push('email')   
    }
    if(!phoneNumber.value){
        message.push('phoneNumber')   
    }
    if(!password.value){
        message.push('password')   
    }
    if(!confirmPassword.value){
        message.push('confirmPassword')   
    }

   
    if(message.indexOf('firstName') > -1){
        fnameError.style.display='block';
        fnameError.innerHTML = ['required *'];
        empty=false;
    }

   
    if(message.indexOf('lastname') > -1){
        lnameError.style.display= 'block';
        lnameError.innerHTML = ['required *'];
        empty=false;
    }

    if(message.indexOf('email') > -1){
        emailError.style.display= 'block';
        emailError.innerHTML = ['required *'];
        empty=false;
    }

    if(message.indexOf('phoneNumber') > -1){
        phonenumberError.style.display= 'block';
        phonenumberError.innerHTML = ['required *'];
        empty=false;
    }
       
    if(message.indexOf('password') > -1){
        passwordError.style.display= 'block';
        passwordError.innerHTML = ['required *'];
        empty=false;
    }
    if(message.indexOf('confirmPassword') > -1){
        cPasswordError.style.display= 'block';
        cPasswordError.innerHTML = ['required *'];
        empty=false;
    }
    
    
    if(!empty) return false;
    passwordError.innerHTML = [''];
    cPasswordError.innerHTML = [''];

    if(password.value.length > 5){
        if(password.value!==confirmPassword.value){
            cPasswordError.style.display= 'block';
            cPasswordError.style.color = "red";
            cPasswordError.innerHTML = ['Password not matching'];
        }else{
            cPasswordError.style.display= 'block';
            passwordError.style.display= 'block';
            passwordError.style.color = "green";
            cPasswordError.style.color = "green"
            cPasswordError.innerHTML = ['Password matched'];

        }
    }else {
        passwordError.style.display= 'block';
        passwordError.innerHTML = ['Password must be minimum 6 charactors'];
    }


})



