
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

function isValid(user){
    $('.error').html('')
    $('.wrong').removeClass('wrong')
    let valid = true
    if(user.email.length === 0){
        valid = false
        console.log('missing email')
        $('.error-email').html('<p style="background-color: red;">Email is blank</p>')
        $('.email').addClass('wrong')
        
    }
    if(user.password.length === 0){
        valid = false
        console.log(`missing passsword`)
        $('.error-password').html('<p style="background-color: red;">Password is blank</p>')
        $('.password').addClass('wrong')
    }
    if(user.first.length === 0){
        valid = false
        console.log(`missing first`)
        $('.error-first-name').html('<p style="background-color: red;">First Name is blank</p>')
        $('.first-name').addClass('wrong')
    }
    if(user.last.length === 0){
        valid = false
        console.log(`missing last`)
        $('.error-last-name').html('<p style="background-color: red;">Last Name is blank</p>')
        $('.last-name').addClass('wrong')
    }
    if(user.age.length === 0){
        valid = false
        console.log(`missing age`)
        $('.error-age').html('<p style="background-color: red;">Age is blank</p>')
        $('.age').addClass('wrong')
    }
    if(user.address.length === 0){
        valid = false
        console.log(`missing address`)
        $('.error-address').html('<p style="background-color: red;">Address is blank</p>')
        $('.address').addClass('wrong')
    }
    if(user.phone.length === 0){
        valid = false
        console.log(`missing phone`)
        $('.error-phone-number').html('<p style="background-color: red;">Phone Number is blank</p>')
        $('.phone-number').addClass('wrong')
    }
    if(user.payment.length === 0){
        valid = false
        console.log(`missing payment`)
        $('.error-payment').html('<p style="background-color: red;">Payment is blank</p>')
        $('.payment').addClass('wrong')
    }
    if(user.color.length === 0){
        valid = false
        console.log(`missing color`)
        $('.error-color').html('<p style="background-color: red;">Color is blank</p>')
        $('.color').addClass('wrong')
    }
    return valid
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
    if(isValid(user)){
        saveUser(user)
        $('.container input').val('')
    }
}

function init(){
    console.log('Init Register')
    $('#btnRegister').click(registerUser)
}

window.onload=init;


