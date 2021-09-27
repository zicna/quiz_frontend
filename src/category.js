class Category{
    constructor({id, name}){
        this.id = id
        this.name = name
    }
    appendToDom(){
        const div = document.createElement("div")
        div.setAttribute("id", `category-${this.id}`)
        const btn = document.createElement("button")
        btn.innerHTML = `
            See Quizzes
        `
        btn.addEventListener("click", this.handleClickBtnCategory)
        div.innerHTML = `
            <h5>${this.name}</h5>
        `
        div.appendChild(btn)
        categoryContainer.appendChild(div)
    }
    handleClickBtnCategory(event){
        if(event.target.innerText === "See Quizzes") {
            event.target.innerText = "See Less"
            event.target.nextElementSibling.style.display = "block"
        } else if(event.target.innerText === "See Less"){
            event.target.innerText = "See Quizzes"
            event.target.nextElementSibling.style.display = "none"
        }

    }
}