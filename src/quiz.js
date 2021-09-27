class Quiz{
    constructor({id, name, category_id}){
        this.id = id
        this.name = name
        this.category_id = category_id
    }
    appendQuizToDom(){
        const div = document.createElement("div")
        div.setAttribute("id", `quiz-${this.id}`)
        div.setAttribute("style", "display:none")
        div.innerHTML = `
            <span style="display:none"> ${this.id}</span>
            <h4>${this.name}</h4>
            <span style="display:none">${this.category_id}</span>
            <button>Start the Quiz</button>
        `
        const parentDiv = document.getElementById(`category-${this.category_id}`)
        parentDiv.appendChild(div)
    }
}