class Quiz {
  constructor({ id, name, description }) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
  appendQuizToDom() {
    //*creating new button for starting the quiz
    const buttonStart = document.createElement("button");
    Object.assign(buttonStart, {
      id: `btn-start-${this.id}`,
      class: "btn",
      innerHTML: "Start the Quiz",
    });
    buttonStart.addEventListener("click", this.handleQuizStart);

    //* creating new button for showing more info on quiz
    const buttonAbout = document.createElement("button");
    Object.assign(buttonAbout, {
      id: `btn-about-${this.id}`,
      class: "btn",
      innerHTML: "About the quiz",
    });
    buttonAbout.addEventListener("click", this.handleQuizAbout);

    //* creating div container where all questions for given quiz will live
    const questionContainer = document.createElement("div");
    Object.assign(questionContainer, {
      id: `q-q-${this.id}`,
      class: "question-container",
      style: "display:none",
    });

    //* creating main div
    const div = document.createElement("div");
    Object.assign(div, {
      id: `quiz-${this.id}`,
      class: "quiz-container",
      innerHTML: `
        <span style="display:none"> ${this.id}</span>
        <h4>${this.name}</h4>
        <p id="p-about-${this.id}"style="display:none">Description: ${this.description}</p>
        <span style="display:none">${this.category_id}</span>
      `,
    });

    //*  adding all elements to the main div
    div.appendChild(buttonStart);
    div.appendChild(buttonAbout);
    div.appendChild(questionContainer);

    mainQuizDiv.appendChild(div);
  }

  handleQuizStart(event) {
    //*we want all other quizzes to disappear
    if (event.target.innerText === "Start the Quiz") {
      event.target.innerText = "Close";
      const parentEl = event.target.parentElement;
      parentEl.setAttribute("class", "active");
      // debugger
      event.target.nextElementSibling.style.display = "block";
    } else if (event.target.innerText === "Close") {
      event.target.innerText = "Start the Quiz";
      const parentEl = event.target.parentElement;
      parentEl.classList.remove("active");
      event.target.nextElementSibling.style.display = "none";
    }
  }

  handleQuizAbout(event) {
    if(event.target.innerText === "About the quiz"){
      event.target.innerText = "See less"
      const id = Number(this.id.split("-")[2])
      const p = document.getElementById(`p-about-${id}`)
      p.style.display = "block"
    }else if(event.target.innerText === "See less"){
      event.target.innerText = "About the quiz"
      const id = Number(this.id.split("-")[2])
      const p = document.getElementById(`p-about-${id}`)
      p.style.display = "none"
    }
  }
}

// . style. display = "none"
