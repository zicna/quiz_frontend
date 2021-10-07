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
          class: "form-control",
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
        label.innerText = `${option.content}`;

        quizQuestionsList.appendChild(label);
        quizQuestionsList.appendChild(input);
      });
    });
    const inputBtn = document.createElement("input");
    Object.assign(inputBtn, {
      class: "btn btn-lg btn-primary btn-block",
      type: "submit",
      value: "Submit Quiz",
    });
    // inputBtn.addEventListener("click", quizCall.quizSubmit)
    quizForm.appendChild(inputBtn);
    quizForm.addEventListener("submit", quizCall.quizSubmit);
  }
}
