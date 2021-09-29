class QuizService {
  constructor(port) {
    this.port = port;
  }

  getQuizzes() {
    fetch(`${this.port}/quizzes`)
      .then((response) => response.json())
      .then((data) => {
        // debugger;
        data.map(quiz=>{
            const q = new Quiz(quiz)
            q.appendQuizToDom()
            quiz["questions"].map(question=>{
              const q = new Question(question)
              q.appendQuestionToDom()
              question["options"].map(option=>{
                const o = new Option(option)
                o.appendOptionToDom()
              })
            })
        })
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
