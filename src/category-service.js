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
          })
          // c.appendToDom()
        })
      });
  }

  // getQuizFromCategory(){

  // }
}
