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

    const questionContainer = document.createElement("div");
    questionContainer.setAttribute("class", "question-container");
    questionContainer.setAttribute("id", `q-q-${this.id}`);
    questionContainer.setAttribute("style", "display:none");

    div.innerHTML = `
            <span style="display:none"> ${this.id}</span>
            <h4>${this.name}</h4>
            <span style="display:none">${this.category_id}</span>
        `;
    div.appendChild(button);
    div.appendChild(questionContainer);

    mainQuizDiv.appendChild(div);
  }

  handleQuizClick(event) {
    // debugger
    //*we want all other quizzes to disappear
    if (event.target.innerText === "Start the Quiz") {
      event.target.innerText = "Close";
      const parentEl = event.target.parentElement;
      parentEl.setAttribute("class", "active");
      // debugger
      event.target.nextElementSibling.style.display="block";
    } else if (event.target.innerText === "Close") {
      event.target.innerText = "Start the Quiz";
      const parentEl = event.target.parentElement;
      parentEl.classList.remove("active");
      event.target.nextElementSibling.style.display = "none";
    }
  }
}

// . style. display = "none"
