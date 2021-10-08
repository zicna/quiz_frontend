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

    // !we need to set data attribute for each row that will represent take id so we can target that take and delete it from db
    this.takes.map((el, index) => {
      const row = document.createElement("tr");
      const percentCorrect = Math.round(
        (el.num_correct_answers / el.total_questions) * 100
      );
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${el.num_correct_answers}</td>
        <td>${el.total_questions}</td>
        <td>${percentCorrect} %</td>
        <td><a href="#" class="btn btn-danger btn-sm delete" id="delete-${
          el.id
        }">X</a></td>
      `;
      userResultList.appendChild(row);
    });
  }
}
