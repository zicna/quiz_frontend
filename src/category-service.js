class CategoryService {
  constructor(port) {
    this.port = port;
  }

  getCategories() {
    fetch(`${this.port}/categories`)
      .then(response=> response.json())
      .then(data=> {
        // 
        data.forEach(cat => {
          const c = new Category(cat)
          c.appendToDom()
          cat["quizzes"].forEach(quiz =>{
            const q = new Quiz(quiz)
            q.appendQuizToDom()
            cat["questions"][0].forEach(question =>{
              const ques = new Question(question)
              ques.appendQuestionToDom()
              cat["options"][0].forEach(optionArray => {
                optionArray.forEach(option =>{
                  const o = new Option(option)
                  o.appendOptionToDom()
                })
              })
            })
          })
        })
      });
  }
}
