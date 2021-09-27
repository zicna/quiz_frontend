class Option{
    constructor({id, question_id, is_correct, content}){
    this.id = id
    this.question_id = question_id
    this.is_correct = is_correct
    this.content = content
    }
    appendOptionToDom(){
        const div = document.createElement("div")
        div.innerHTML = `
        <span style="display:none"> ${this.id}</span>
        <span><b>${this.content}</b></span>
        <span style="display:none">${this.question_id}</span>
        <span style="display:none">${this.is_correct}</span>

        `
        categoryContainer.lastChild.appendChild(div)
    }
}