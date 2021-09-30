const port = "http://localhost:3000";
const usersCall = new UserService(port);

// usersCall.getUser(port)

//*HTML Elements constants
const mainQuizDiv = document.getElementById("main-container");
const startQuiz = document.getElementById("btn-start");

const userForm = document.getElementById("user-form");
const username = document.getElementById("username");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

// let oldUser;
// function getRadioValue(arr) {
//   if (arr[0].checked) return true;
//   else if (arr[1].checked) return false;
// }

userForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

//   const arrOfRadioBtns = Array.from(document.getElementsByName("old-user"));
//   oldUser = getRadioValue(arrOfRadioBtns);

  usersCall.getUser();
}
