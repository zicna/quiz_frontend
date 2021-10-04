class Quiz {
  constructor({ id, name, description, questions }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.questions = questions.map(question => new Question(question))
  }

  appendQuizToDom(){
    // *show quiz container, set quiz anme adn description
    quizContainer.style.display = "block"
    quizName.innerText = `${this.name}`
    quizDescription.innerText = `${this.description}`
    //*iterate through quiz questions and add them to DOM
    this.questions.map(question =>{
      const li = document.createElement("li")
      li.innerText = `${question.content}`
      quizQuestionsList.appendChild(li)
      // * iterate through each question options (create input and labels)
      question.options.map(option => {
        const input = document.createElement("input")
        Object.assign(input, {
          type: "radio",
          name: `options-for-${option.question_id}`,
          required: true
        })
        const label = document.createElement("label")
        label.innerText = `${option.content}`
        quizQuestionsList.appendChild(label)
        quizQuestionsList.appendChild(input)
      })
    })
    const inputBtn = document.createElement("input")
    Object.assign(inputBtn, {
      class: "btn",
      type: "submit",
      value: "Submit Quiz"
    })
    
    quizForm.appendChild(inputBtn)
    quizForm.addEventListener("submit", this.handleQuizSubmit)
  }

  handleQuizSubmit(event){
    event.preventDefault();
    debugger
    
  }
  // appendQuizToDom() {
  //   //*creating new button for starting the quiz
  //   const buttonStart = document.createElement("button");
  //   Object.assign(buttonStart, {
  //     id: `btn-start-${this.id}`,
  //     class: "btn",
  //     innerHTML: "Start the Quiz",
  //   });
  //   buttonStart.addEventListener("click", this.handleQuizStart);

  //   //* creating new button for showing more info on quiz
  //   const buttonAbout = document.createElement("button");
  //   Object.assign(buttonAbout, {
  //     id: `btn-about-${this.id}`,
  //     class: "btn",
  //     innerHTML: "About the quiz",
  //   });
  //   buttonAbout.addEventListener("click", this.handleQuizAbout);

  //   //* creating div container where all questions for given quiz will live
  //   const questionContainer = document.createElement("form");
  //   Object.assign(questionContainer, {
  //     id: `q-q-${this.id}`,
  //     class: "question-container",
  //     style: "display:none",
  //   });
  //   const submit = document.createElement("input");
  //   Object.assign(submit, {
  //     type: "submit",
  //     value: "Submit your Answer",
  //   });
  //   // submit.addEventListener("click", this.handleSubmit);
  //   questionContainer.appendChild(submit);
  //   questionContainer.addEventListener("submit", this.handleSubmit )

  //   //* creating main div
  //   const div = document.createElement("div");
  //   Object.assign(div, {
  //     id: `quiz-${this.id}`,
  //     class: "quiz-container",
  //     innerHTML: `
  //       <span style="display:none"> ${this.id}</span>
  //       <h4>${this.name}</h4>
  //       <p id="p-about-${this.id}"style="display:none">Description: ${this.description}</p>
  //       <span style="display:none">${this.category_id}</span>
  //     `,
  //   });

  //   //*  adding all elements to the main div
  //   div.appendChild(buttonStart);
  //   div.appendChild(buttonAbout);
  //   div.appendChild(questionContainer);

  //   mainQuizDiv.appendChild(div);
  // }

  // handleQuizStart(event) {
  //   //*we want all other quizzes to disappear
  //   if (event.target.innerText === "Start the Quiz") {
  //     // debugger
  //     // event.target.parentElement.lastElementChild
  //     event.target.innerText = "Close";
  //     const parentEl = event.target.parentElement;
  //     parentEl.setAttribute("class", "active");
  //     parentEl.lastElementChild.style.display = "block";
  //     //* we are calling helper to get all sibilings of parent element of button
  //     const siblings = Helper.getAllSiblings(parentEl);
  //     //*we are setting style for all buttons parent element siblings to "none" except for actual parent element
  //     siblings.map((element) => {
  //       if (element !== parentEl) {
  //         element.style.display = "none";
  //       }
  //     });
  //   } else if (event.target.innerText === "Close") {
  //     event.target.innerText = "Start the Quiz";
  //     const parentEl = event.target.parentElement;
  //     parentEl.classList.remove("active");
  //     parentEl.lastElementChild.style.display = "none";
  //     const siblings = Helper.getAllSiblings(parentEl);
  //     siblings.map((element) => {
  //       element.style.display = "block";
  //     });
  //   }
  // }

  // handleQuizAbout(event) {
  //   if (event.target.innerText === "About the quiz") {
  //     event.target.innerText = "See less";
  //     const id = Number(this.id.split("-")[2]);
  //     const p = document.getElementById(`p-about-${id}`);
  //     p.style.display = "block";
  //   } else if (event.target.innerText === "See less") {
  //     event.target.innerText = "About the quiz";
  //     const id = Number(this.id.split("-")[2]);
  //     const p = document.getElementById(`p-about-${id}`);
  //     p.style.display = "none";
  //   }
  // }

  // handleSubmit(event) {
  //   event.preventDefault()

   
  // }
}
