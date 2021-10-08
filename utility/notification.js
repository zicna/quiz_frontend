class Notification{

    static showAlert(message, className){
        const div = document.createElement("div")
        div.className = `text-center alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        // *this will look for first el with class "row" and it will return first match
        const firstRow = document.querySelector(".row")
        // *this will insert div into parent el(frontPageDiv) before firsRow
        frontPageDiv.insertBefore(div, firstRow)
        // *this will remove div from front page after 3 sec
        setTimeout(()=>div.remove(), 3000)
    }
}