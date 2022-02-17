const KEY_VALUE = "users"
function saveUser(user){
    let oldData = readUser()
    oldData.push(user)
    let val = JSON.stringify(oldData)
    localStorage.setItem(KEY_VALUE, val)

}
function readUser(){
    let users = localStorage.getItem(KEY_VALUE)
    if(!users){
        return []
    }else{
        let list = JSON.parse(users)
        return list
    }
}