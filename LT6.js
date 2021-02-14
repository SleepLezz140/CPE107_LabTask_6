//Form validation

var FName = document.forms["SignUp"]["Name"]; 
var Middle = document.forms["SignUp"]["MI"]; 
var LName = document.forms["SignUp"]["LastName"]; 
var email = document.forms["SignUp"]["Email"]; 

var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var name_error = document.getElementById("name-error");
var MI_error = document.getElementById("initial-error");
var Lname_error = document.getElementById("LastName-error");
var email_error = document.getElementById("Email-error");
var invalid_email= document.getElementById("Email-error");

function validate(){ 
    if(FName.value == ""){
        FName.style.border = "1px solid red";
        name_error.textContent = "First Name is Required";
        FName.focus();
        return false;
    }

    if(Middle.value == ""){
        Middle.style.border = "1px solid red";
        MI_error.textContent = "Middle Initial is Required";
        MI.focus();
        return false;
    }

    if(LName.value == ""){
        LName.style.border = "1px solid red";
        Lname_error.textContent = "Last Name is Required";
        LName.focus();
        return false;
    }

   if(email.value == ""){
        email.style.border = "1px solid red";
        email_error.textContent = "Email is Required";
        email.focus();
        return false;
    }

    if(mailformat.test(email.value) == false){
        email.style.border = "1px solid red";
        invalid_email.textContent = "Invalid email format";
        email.focus();
        return false;
    }

   return alert("Success!");
  }
  
  //validates all textboxes
  document.getElementById("signupbtn").onclick = function(){
    for( var i = 0, t = document.getElementsByName( "input" ), l = t.length; i < l; i++ )   {
        if( t[i].value && !/^\s+$/.test( t[i].value ) ) { 
           return true;
        }
        else{
            FName.style.border = "1px solid red";
            name_error.textContent = "First Name is Required";
            Middle.style.border = "1px solid red";
            MI_error.textContent = "Middle Initial is Required";
            LName.style.border = "1px solid red";
            Lname_error.textContent = "Last Name is Required";
             email.style.border = "1px solid red";
            email_error.textContent = "Email is Required";
        }
    }

  }


  


