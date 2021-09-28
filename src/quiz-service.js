class QuizService {
  constructor(port) {
    this.url = port + "/quizzes";
  }

  getQuizzes() {
    fetch(this.url)
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
}
