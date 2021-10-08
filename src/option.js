class Option {
  constructor({ id, question_id, is_correct, content }) {
    this.id = id;
    this.question_id = question_id;
    this.is_correct = is_correct;
    this.content = content;
  }
  // appendOptionToDom(){
  //     debugger
  //     const div = document.createElement("div")
  //     div.setAttribute("id", `option-${this.id}`)
  //     div.innerHTML = `
  //         <input type="radio" name="option-${this.question_id}">
  //         ${this.content}
  //         </input>
  //     `
  //     const parentDiv = document.getElementById(`question-${this.question_id}`)
  //     parentDiv.appendChild(div)
  // }
}
