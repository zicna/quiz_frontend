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
        <span style="display:none"> ${this.id}</span>
        <span>${this.name}</span>
        <span style="display:none">${this.category_id}</span>
        `
        categoryContainer.lastChild.appendChild(div)
    }
}