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
        label.appendChild(input);
        quizQuestionsList.appendChild(label);
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
    frontPageDiv.style.display = "block";
    btnSaveDB.style.display = "block";
    const checkedInputs = Array.from()
    let arrNodes = []
    event.target.elements).filter((input) => {
        if (input.type === "radio" && input.checked === true) {
          Object.assign({}, input.response);
        }
      }
      debugger
    
    // let selectedInputs = [];
    // checkedInputs.forEach((input) => {
    //   if (input.type === "radio" && input.checked) {
    //     selectedInputs.push(Object.assign({}, input.response));
    //   }
    // });

    quizForm.reset();
    quizContainer.style.display = "none";
    userNewResultsFieldset.style.display = "block";
    let newAnswers = 0;
    checkedInputs.forEach((response) => {
      debugger
      if (response.is_correct === "true") {
        return ++newAnswers;
      }
    });
    // debugger
    const div = document.createElement("div");
    const percentCorrect = Math.round(
      (newAnswers / checkedInputs.length) * 100
    );
    // const btnSave = Object.assign(document.createElement("button"), {
    //   class: "btn",
    //   id: "save-new-take",
    //   innerText: "Save New Take",
    // });
    // debugger
    // btnSave.addEventListener("click", this.newQuiz)

    div.innerHTML = `
      <p>new take: ${newAnswers} correct answers of ${checkedInputs.length} questions- <span>${percentCorrect} % correct</span>
      </p>
    `;
    // div.appendChild(btnSave)
    userNewResultsFieldset.appendChild(div);

    btnNewTake.innerText = "Another Try";
    btnNewTake.style.display = "block";
  }

  newQuiz(event) {
    debugger;
  }
}
