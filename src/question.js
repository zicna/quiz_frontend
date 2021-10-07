class Question{
    constructor({id, content, quiz_id, options}){
        this.id = id
        this.content = content
        this.quiz_id = quiz_id
        this.options = options.map(option => new Option(option))
    }

    appendQuestionToDom(){
        const div = document.createElement("div")
        div.setAttribute("id", `question-${this.id}`)

        div.innerHTML = `<span>${this.content}</span>`
        const parentDiv = document.getElementById(`q-q-${this.quiz_id}`)
        parentDiv.appendChild(div)
    }
}