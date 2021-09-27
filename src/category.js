class Category{
    constructor({id, name}){
        this.id = id
        this.name = name
    }
    appendToDom(){
        const div = document.createElement("div")
        div.innerHTML = `
        <spam>${this.name}</spam>
        `
        categoryContainer.appendChild(div)
    }
}