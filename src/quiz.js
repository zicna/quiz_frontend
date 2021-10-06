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
            // is_correct: `${option.is_correct}`,
            take_id: Store.getTake().id
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
    // inputBtn.addEventListener("click", quizCall.quizSubmit)
    quizForm.appendChild(inputBtn);
    quizForm.addEventListener("submit", quizCall.quizSubmit);
  }

  
}
