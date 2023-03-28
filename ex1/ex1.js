function checkUsername(name){
    if(name === ''){
        document.getElementById('username_error').innerHTML = "Please enter your username";
        return false;
    }
    else{
        document.getElementById('username_error').innerHTML = "";
        return true;
    }

}

function checkPassword(password){
    var pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$*!#])[0-9a-zA-Z$*!#]{8,25}';
    if(password === ''){
        document.getElementById('password_error').innerHTML = "Please enter your password";
        return false;
    } 
    else{
         if(!password.match(pattern)){
            document.getElementById('password_error').innerHTML = "Password must have 8-15 characters, contains at least 1 upper character, 1 lower character, 1 number and 1 special character $*!# ";
            return false;
        }   
    else{
        document.getElementById('password_error').innerHTML = "";
        return true;
        }  
    }
}

function checkEmail(email){
    var pattern = '[a-zA-Z0-9]{7,}@gmail.com';
    if(email === ''){
        document.getElementById('email_error').innerHTML = "Please enter your email";
        return false;
        }
    else{
        {
            if(!email.match(pattern)){
                document.getElementById('email_error').innerHTML = "Your email name must have at least 7 characters and end with @gmail.com";
                return false;
            }
            else{
                document.getElementById('email_error').innerHTML = "";
                return true;
            }
        }
    }      
}

function checkJob(job){
    if(job === ''){
        document.getElementById('job_error').innerHTML = "You must choose your job";
        return false;
    }
    else{
        document.getElementById('job_error').innerHTML = "";
        return true;
    }
}

function checkTerm(term){
    if(term == false){
        document.getElementById('term_error').innerHTML = "You must agree to the terms";
        return false;
    }
    else{
        document.getElementById('term_error').innerHTML = "";
        return true;
    }
}

function submit(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var job = document.getElementById('job').value;
    var term = document.getElementById('term').checked;
    var gender_male = document.getElementById('gender_male');
    var gender_fmale = document.getElementById('gender_fmale');
    var gender;
    if(gender_male.checked){
        gender = "Male";
        }
    else{
        gender = "Female";
        }
    if(checkUsername(username) * checkPassword(password) * checkEmail(email) * checkJob(job) * checkTerm(term)===1){
        alert(
            "'username': " + username + ", " +
            "\n'password': " + password + ", " +
            "\n'email': " + email + ", " +
            "\n'gender': " + gender + ", " +
            "\n'job': " + job 
        );
    }
}