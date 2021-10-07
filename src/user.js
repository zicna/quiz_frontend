class User {
  constructor({ id, username, email, admin, takes }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.admin = admin;
    this.takes = takes.map((take) => {
      return new Take(take);
    });
  }
  appendUserToDom() {
    userDisplayDIv.style.display = "block";
    userDisplayUsername.innerText = `${this.username}`;
    userForm.style.display = "none";
    // *move it to helper method?
    const numOfQuestions = 7;
    const correctAnswers = this.takes.map((take) => {
      return take.responses.map((tr) => {
        return tr.reduce((agg, curr) => {
          if (curr.is_true) agg++;
          return agg;
        }, 0);
      });
    });
    
    correctAnswers.map((el, index) => {
      const row = document.createElement("tr");
      // !we need to set data attribute for each row that will represent take id
      // !so we can target that take and delete it from
      const percentCorrect = Math.round((el / numOfQuestions) * 100);
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${el}</td>
        <td>${numOfQuestions}</td>
        <td>${percentCorrect} %</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `
      
      userResultList.appendChild(row);
    });
  }
}
