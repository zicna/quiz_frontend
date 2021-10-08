class Quiz {
  constructor({ id, name, description, questions }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.questions = questions.map((question) => new Question(question));
  }

  appendQuizToDom() {
    // *show quiz container, set quiz name and description
    quizContainer.style.display = "block";
    quizName.innerText = `${this.name}`;
    quizDescription.innerText = `${this.description}`;
    quizQuestionsList.innerHTML = "";
    // quizQuestionsList.nextElementSibling.remove();
    //*iterate through quiz questions and add them to DOM
    this.questions.map((question) => {
      const li = document.createElement("li");
      li.innerHTML = `<b>${question.content}</b>`;
      quizQuestionsList.appendChild(li);
      // * iterate through each question options (create input and labels)
      question.options.map((option) => {
        // !creating radio button for each option of the question
        const input = document.createElement("input");
        Object.assign(input, {
          type: "radio",
          className: "form-check-input",
          response: {
            option_id: `${option.id}`,
            question_id: `${option.question_id}`,
            take_id: Store.getTake().id,
          },
          name: `options-for-${option.question_id}`,
          required: true,
        });
        // !creating label for each radio button

        const label = document.createElement("label");
        label.classList.add("text-secondary");
        label.classList.add("form-check-label");
        label.innerText = `${option.content}`;

        quizQuestionsList.appendChild(input);
        quizQuestionsList.appendChild(label);
        quizQuestionsList.appendChild(document.createElement("hr"));
      });
    });
    const inputBtn = document.createElement("input");
    Object.assign(inputBtn, {
      className: "btn btn-lg btn-primary btn-block",
      id: "quiz-submit",
      type: "submit",
      value: "Submit Quiz",
    });
    if (!document.getElementById("quiz-submit")) {
      quizForm.appendChild(inputBtn);
    }
    quizForm.addEventListener("submit", quizCall.quizSubmit);
  }
}
