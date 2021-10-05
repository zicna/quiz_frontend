class QuizService {
  constructor(port) {
    this.port = port;
  }

  getQuizzes() {
    fetch(`${this.port}/quizzes/1`)
      .then((response) => response.json())
      .then((data) => {
       const q = new Quiz(data);
       q.appendQuizToDom()
      });
  }

  quizSubmit(event){
    event.preventDefault();
    const arrayInputNodes = Array.from(event.target.elements)
    let arrOfCheckedResponses = []

    for(let input of arrayInputNodes){
      if(input.type === "radio" && input.checked === true){
            arrOfCheckedResponses.push(input.response)
          }
      }
    
  }

}
