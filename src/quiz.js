class Quiz {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }
  appendQuizToDom() {
    const div = document.createElement("div");
    div.setAttribute("id", `quiz-${this.id}`);
    div.setAttribute("class", "quiz-container");

    const button = document.createElement("button");
    button.setAttribute("id", `btn-start-${this.id}`);
    button.setAttribute("class", "btn");
    button.innerHTML = "Start the Quiz";
    button.addEventListener("click", this.handleQuizClick);

    div.innerHTML = `
            <span style="display:none"> ${this.id}</span>
            <h4>${this.name}</h4>
            <span style="display:none">${this.category_id}</span>
        `;
    div.appendChild(button);

    mainQuizDiv.appendChild(div);
  }

  handleQuizClick(event) {
    debugger
    //*we want all other quizzes to disappear
    if(event.target.innerHTML === "Start the Quiz")
        let parentSibiling = event.target.parentElement.nextElementSibling;
        while (parentSibiling) {
          parentNextSibiling.style.display = "none";
          parentNextSibiling = parentSibiling.nextElementSibling;
        }
  }
}
