class Quiz {
  constructor({ id, name, description, questions }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.questions = questions.map((question) => new Question(question));
  }

  appendQuizToDom() {
    // *show quiz container, set quiz anme adn description
    quizContainer.style.display = "block";
    // quizContainer.focus()
    quizName.innerText = `${this.name}`;
    quizDescription.innerText = `${this.description}`;
    //*iterate through quiz questions and add them to DOM
    this.questions.map((question) => {
      const li = document.createElement("li");
      li.innerText = `${question.content}`;
      quizQuestionsList.appendChild(li);
      // * iterate through each question options (create input and labels)
      question.options.map((option) => {
        const input = document.createElement("input");
        Object.assign(input, {
          type: "radio",
          response: {
            option_id: `${option.id}`,
            question_id: `${option.question_id}`,
            is_correct: `${option.is_correct}`,
          },
          name: `options-for-${option.question_id}`,
          required: true,
        });
        const label = document.createElement("label");
        label.innerText = `${option.content}`;
        quizQuestionsList.appendChild(label);
        quizQuestionsList.appendChild(input);
      });
    });
    const inputBtn = document.createElement("input");
    Object.assign(inputBtn, {
      class: "btn",
      type: "submit",
      value: "Submit Quiz",
    });

    quizForm.appendChild(inputBtn);
    quizForm.addEventListener("submit", this.handleQuizSubmit);
  }

  handleQuizSubmit(event) {
    event.preventDefault();
    const arrInputs = Array.from(event.target.elements);
    let selectedInputs = [];
    arrInputs.forEach((input) => {
      if (input.type === "radio" && input.checked) {
        selectedInputs.push(Object.assign({}, input.response));
      }
    });

    quizForm.reset();
    quizContainer.style.display = "none";
    userNewResultsFieldset.style.display = "block";
    let newAnswers = 0;
    selectedInputs.forEach(response => {
      if (response.is_correct=== "true") {
        return ++newAnswers};
    });
    debugger
    const p = document.createElement("p")
    const s = document.createElement("span")
    p.innerHTML = `new take: ${newAnswers} correct answers of ${selectedInputs.length} questions- `
    const percentCorrect = Math.round(newAnswers / selectedInputs.length * 100)
    s.innerHTML = `${percentCorrect} % correct`
    p.appendChild(s)
    userNewResultsFieldset.appendChild(p)

    const button = document.createElement("button")
    Object.assign(button, {
      class:"btn",
      id: "save-new-take",
      innerText: "Save New Take"
    })
    button.addEventListener("click", this.saveNewQuiz)
    userNewResultsFieldset.appendChild(button)
  }

  saveNewQuiz(){
    debugger
    console.log("heloo")
  }
}
