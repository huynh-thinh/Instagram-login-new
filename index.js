var USEREMAIL ="a"
var USERPASSWORD = "as"

var email  = document.querySelector('#email')
var password  = document.querySelector('#password')

var button =document.querySelector('#button')


function handleClick(){
var value =email.value;
var value2 =password.value;
console.log("email: "+value)
console.log("pass: "+value2)

if (value === USEREMAIL && value2   === USERPASSWORD){
    window.dialog.showModal();
    h2.innerHTML = "Login successfully"

    
}
else{
    console.log('Sai tai khoan hoac mat khau')
    // alert('Sai tai khoan hoac mat khau')
    window.dialog.showModal();
    h2.innerHTML = "Login failed \n Incorrect email or password"



}
}
button.addEventListener('click', handleClick);