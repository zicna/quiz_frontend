class QuizService {
  constructor(port) {
    this.port = port;
  }

  getQuizzes() {
    fetch(`${this.port}/quizzes/1`)
      .then((response) => response.json())
      .then((data) => {
        const q = new Quiz(data);
        q.appendQuizToDom();
      });
  }

  quizSubmit(event) {
    event.preventDefault();
    quizContainer.style.display = "none";
    frontPageDiv.style.display = "block";
    //*get html collection of all child elements of form and turn it to array of html elements
    const arrayInputNodes = Array.from(event.target.elements);
    let arrOfCheckedResponses = [];
    //*iterate through and get only elemets that user checked
    for (let input of arrayInputNodes) {
      if (input.type === "radio" && input.checked === true) {
        arrOfCheckedResponses.push(input.response);
      }
    }

    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newResponses),
    };
    fetch(`${quizCall.port}/responses`, configObject)
      .then((response) => response.json())
      .then((data) => {
        userResultList.innerHTML = "";

        const user = new User(data);
        Store.setUser(user);
        user.appendUserToDom();
      });
  }
}
