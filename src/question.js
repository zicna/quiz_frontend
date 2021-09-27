class Question{
    constructor({id, content, quiz_id}){
        this.id = id
        this.content = content
        this.quiz_id = quiz_id
    }

    appendQuestionToDom(){
        const div = document.createElement("div")
        div.innerHTML = `
        <span style="display:none"> ${this.id}</span>
        <span>${this.content}</span>
        <span style="display:none">${this.quiz_id}</span>
        `
        categoryContainer.lastChild.appendChild(div)
    }
}