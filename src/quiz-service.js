class QuizService {
  constructor(port) {
    this.port = port;
  }

  getQuizzes() {
    fetch(`${this.port}/quizzes/1`)
      .then((response) => response.json())
      .then((data) => {
        // debugger
       const q = new Quiz(data);
       q.appendQuizToDom()
      });
  }
  // sendQuiz(){
  //   debugger
  //   const url = this.port + "/responses"
  //   const configObject = {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: {

  //     }
  //   }
  //   fetch(url, configObject)
  // }

}
