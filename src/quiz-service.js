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

}
