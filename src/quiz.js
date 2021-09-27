class Quiz{
    constructor({id, name, category_id}){
        this.id = id
        this.name = name
        this.category_id = category_id
    }
    appendQuizToDom(){
        // debugger
        const div = document.createElement("div")
        div.innerHTML = `
        <spam> ${this.id}</spam>
        <spam>${this.name}</spam>
        <spam>${this.category_id}</spam>
        `
        // debugger
        categoryContainer.lastChild.appendChild(div)
    }
}