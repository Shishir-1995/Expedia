document.querySelector("form").addEventListener("submit",myFunc)

let user_arr = JSON.parse(localStorage.getItem("userData")) || []
function myFunc(event){
    event.preventDefault();

    let userObj = {
        user_email : document.querySelector("#email").value,
        user_password : document.querySelector("#password").value,
    }
    user_arr.push(userObj);
    console.log(user_arr);
    localStorage.setItem("userData",JSON.stringify(user_arr));
}
