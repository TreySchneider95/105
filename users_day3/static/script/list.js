function createRow(userArray){
    for(let i = 0; i < userArray.length; i++){
        let user = userArray[i]
        let tmp = `
            <tr>
                <td>${user.email}</td>
                <td>${user.first}</td>
                <td>${user.last}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
                <td>${user.payment}</td>
                <td>${user.color}</td>
            </tr>
        `
        $('#userList').append(tmp)
    }
}
function init(){
    console.log('listing')
    let users = readUser()
    createRow(users)
}
window.onload = init()
console.log('hello')
