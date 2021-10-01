class User{
    constructor({id, username, email, admin, takes}){
        this.id = id
        this.username = username
        this.email = email
        this.admin = admin
        this.takes = [
            takes.map(take=>{
                return new Take(take)
            })
        ]
    }
    appendUserToDom(){
        userDisplayDIv.style.display = "block"
        userDisplayUsername.innerText = this.username
        userForm.style.display = "none"
        
    }

    
}