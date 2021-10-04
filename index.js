const port = "http://localhost:3000";
const usersCall = new UserService(port);
const quizCall = new QuizService(port)

// usersCall.getUser(port)

//*HTML Elements constants
const mainQuizDiv = document.getElementById("main-container");
const startQuiz = document.getElementById("btn-start");

const userForm = document.getElementById("user-form");
const username = document.getElementById("username");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
//*HTML const for displaying user
const userDisplayDIv = document.getElementById("user-record")
const userDisplayUsername = document.getElementById("user-username")
const userRecords = document.getElementById("user-records")
const userResults = document.getElementById("user-results")
const userResultsFieldset = document.getElementById("user-results-fieldset")
const userNewResultsFieldset = document.getElementById("user-new-results-fieldset")
const btnNewTake = document.getElementById("btn-new-take")

// * HTML const for rendering quiz
const quizContainer = document.getElementById("quiz-container")
const quizForm = document.getElementById("quiz-form")
const quizName = document.getElementById("quiz-name")
const quizDescription = document.getElementById("quiz-description")
const quizQuestionsList = document.getElementById("quiz-questions-list")

// const userLastResult = document.getElementById("user-last-result")
// const userBestResult = document.getElementById("user-best-result")
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
  event.target.reset()
}

btnNewTake.addEventListener("click", handleNewTakeClick)

function handleNewTakeClick(event){
  btnNewTake.style.display = "none"
  quizCall.getQuizzes()
  // debugger
}