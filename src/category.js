class Category{
    constructor({id, name}){
        this.id = id
        this.name = name
    }
    appendToDom(){
        const div = document.createElement("div")
        div.setAttribute("id", `category-${this.id}`)
        div.innerHTML = `
            <h5>${this.name}</h5>
        `
        categoryContainer.appendChild(div)
    }
    handleClickOnCategory(){
        
    }
}