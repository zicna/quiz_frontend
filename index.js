const port = "http://localhost:3000";

const usersCall = new UserService(port);
const quizCall = new QuizService(port);
const takeCall = new TakeService(port);

//*HTML Elements constants
const frontPageDiv = document.getElementById("front-page");
const startQuiz = document.getElementById("btn-start");
const userForm = document.getElementById("user-form");
const username = document.getElementById("username");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

//*HTML const for displaying user
const userDisplayDIv = document.getElementById("user-record");
const userDisplayUsername = document.getElementById("user-username");
const userResults = document.getElementById("user-results");
const userResultsTable = document.getElementById("user-results-table");
const userResultList = document.getElementById("user-result-list");
const btnSaveDB = document.getElementById("btn-save-db");
const btnNewTake = document.getElementById("btn-new-take");

// * HTML const for rendering quiz
const quizContainer = document.getElementById("quiz-container");
const quizForm = document.getElementById("quiz-form");
const quizName = document.getElementById("quiz-name");
const quizDescription = document.getElementById("quiz-description");
const quizQuestionsList = document.getElementById("quiz-questions-list");

userForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  usersCall.getUser();
  event.target.reset();
}

btnNewTake.addEventListener("click", handleNewTakeClick);

function handleNewTakeClick(event) {
  Store.removeTake();
  takeCall.createNewTake();
  frontPageDiv.style.display = "none";

  quizCall.getQuizzes();
}

userResultList.addEventListener("click", removeTake);

function removeTake(e) {
  Take.deleteTakeDOM(e.target);
}
