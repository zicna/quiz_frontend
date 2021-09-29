class Option{
    constructor({id, question_id, is_correct, content}){
    this.id = id
    this.question_id = question_id
    this.is_correct = is_correct
    this.content = content
    }
    appendOptionToDom(){
        const div = document.createElement("div")
        div.setAttribute("id", `option-${this.id}`)
        // div.innerHTML = `
        //     <span style="display:none"> ${this.id}</span>
        //     <span><b>${this.content}</b></span>
        //     <span style="display:none">${this.question_id}</span>
        //     <span style="display:none">${this.is_correct}</span>
        // `
        div.innerHTML = `
            <input type="radio" name="option-${this.question_id}">
            ${this.content}
            </input>
        `
        const parentDiv = document.getElementById(`question-${this.question_id}`)
        parentDiv.appendChild(div)
    }
}