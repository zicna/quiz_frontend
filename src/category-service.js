class CategoryService {
  constructor(port) {
    this.port = port;
  }

  getCategories() {
    fetch(`${this.port}/categories`)
      .then(response=> response.json())
      .then(data=> {
        // debugger
        data.forEach(cat => {
          const c = new Category(cat)
          c.appendToDom()
          cat["quizzes"].forEach(quiz =>{
            const q = new Quiz(quiz)
            q.appendQuizToDom()
            quiz["questions"].forEach(question =>{
              const ques = new Question(question)
              ques.appendQuestionToDom()
              question["options"].forEach(option => {
                const o = new Option(option)
                o.appendOptionToDom()
              })
            })
          })
        })
      });
  }
}
