
let form = document.querySelector("form")

let user_arr = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();

    let userObj = {
        user_email : form.email.value,
        user_password : form.password.value,
    }
    if (check_credential(userObj.user_email,userObj.user_password)==true){
        localStorage.setItem("login",JSON.stringify(userObj));
        alert("login successful !")
    }else {
        alert("invalid email id or password !")
    }

})

function check_credential (user_email,user_password){
    let filtered = user_arr.filter(function(elem){
        return elem.user_email === user_email && elem.user_password === user_password;
    })
    
    if (filtered.length > 0){
        return true;
    }else {
        return false;
    }
}