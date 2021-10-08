class Notification{

    static showAlert(message, className){
        
        alertContainer.className = `alert alert-${className}`
        alertContainer.appentChild(document.createTextNode(message))
    }
}