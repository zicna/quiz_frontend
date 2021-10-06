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
    //*get html collection of all child elements of form and turn it to array of html elements
    const arrayInputNodes = Array.from(event.target.elements);
    let arrOfCheckedResponses = [];
    //*iterate through and get only elemets that user checked
    for (let input of arrayInputNodes) {
      if (input.type === "radio" && input.checked === true) {
        arrOfCheckedResponses.push(input.response);
      }
    }
    //*for each checked el add key-value pair for what take is it for
    let newResponses = [];
    newResponses = arrOfCheckedResponses.map((el) => {
      el.take_id = Store.getTake().id;
      return el;
    });

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
        debugger;
      });
  }
}
