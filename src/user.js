class User {
  constructor({ id, username, email, admin, takes }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.admin = admin;
    this.takes = 
      takes.map((take) => {
        return new Take(take);
      })
  }
  appendUserToDom() {
    userDisplayDIv.style.display = "block";
    userDisplayUsername.innerText = `${this.username}` ;
    userForm.style.display = "none";
    debugger
    const numOfQuestions = this.takes[0].responses[0].length
    const correctAnswers = this.takes.map(take => {

      return take.responses.map(tr =>{
        return tr.reduce((agg, curr) => {
          if (curr.is_true) agg++
          return agg
        }, 0)
      })
    })

    correctAnswers.map((el, index) => {
      const p = document.createElement("p")
      const s = document.createElement("span")
      
      p.innerHTML = `take ${index + 1}: ${el} correct answers of ${numOfQuestions} questions-  `
      const percentCorrect = Math.round(el / numOfQuestions * 100)
      s.innerHTML = `${percentCorrect} % correct`
      p.appendChild(s)
      userResultsFieldset.appendChild(p)
    })

  }
}
