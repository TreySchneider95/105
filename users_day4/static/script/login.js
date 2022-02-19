function hideWrongLogin(){
    $('#invalid').hide()
}



function login(){
    console.log('login init')
    let email = $('#txtEmail').val()
    let password = $('#txtPassword').val()
    console.log(email, password)
    let user = readUser()
    for(let i = 0; i < user.length; i++){
        if(user[i].email === email && user[i].password === password){
            console.log('thats correct')
            location.href = 'home.html'
            return true
        }
    }
    console.log('wrong')
    $('#invalid').show()
    $(".loginInput").val('')
    setTimeout(hideWrongLogin, 5000)
}
function init(){
    console.log('login')
    $('#btnLogin').click(login)
}
window.onload=init;