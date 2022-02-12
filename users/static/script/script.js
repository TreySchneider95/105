
class User{
    constructor(email, password, first, last, age, address, phone, payment, color){
        this.email=email
        this.password=password
        this.first=first
        this.last=last
        this.age=age
        this.address=address
        this.phone=phone
        this.payment=payment
        this.color=color
    }
}


function registerUser(){
    console.log('register')
    let email = $('#txtEmail').val()
    let password = $('#txtPassword').val()
    let first = $('#txtFirst').val()
    let last = $('#txtLast').val()
    let age = $('#txtAge').val()
    let address = $('#txtAddress').val()
    let phone = $('#txtPhone').val()
    let payment = $('#txtPayment').val()
    let color = $('#txtColor').val()
    let user = new User(email, password, first, last, age, address, phone, payment, color)
    console.log(user)
}

function init(){
    console.log('Init Register')
    $('#btnRegister').click(registerUser)
}

window.onload=init;

