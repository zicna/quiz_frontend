class User{
    constructor({id, username, email, admin}){
        this.id = id
        this.username = username
        this.email = email
        this.admin = admin
    }
    appendUserToDom(){
        // debugger
        userDisplayDIv.style.display = "block"
        userDisplayUsername.innerText = this.username
        userForm.style.display = "none"
        debugger
    }

    
}