const port = 'http://localhost:3000/api/v1'

const usersCall = new UserService(port)
const quizCall = new QuizService(port)
const takeCall = new TakeService(port)

//*HTML Elements constants
const frontPageDiv = document.getElementById('front-page')
const startQuiz = document.getElementById('btn-start')
// * buttons for loggin / sign-up
const btnShowLogin = document.getElementById('btn-show-login')
const btnShowSignUp = document.getElementById('btn-show-sign-up')
const btnBackToStart = document.getElementById('btn-back-to-start')
// * user sign-up form and inputs
const formSignUp = document.getElementById('form-sign-up')
const username = document.getElementById('username-sign-up')
const userEmail = document.getElementById('email-sign-up')
const userPassword = document.getElementById('password-sign-up')
const btnSignUp = document.getElementById('btn-sign-up')
// * user log-in
const formLogin = document.getElementById('form-login')
const usernameLogin = document.getElementById("username-login")
const userPasswordLogin = document.getElementById("password-login")
const btnLogin = document.getElementById("btn-login")

//*HTML const for displaying user
const userDisplayDIv = document.getElementById('user-record')
const userDisplayUsername = document.getElementById('user-username')
const userResults = document.getElementById('user-results')
const userResultsTable = document.getElementById('user-results-table')
const userResultList = document.getElementById('user-result-list')
const btnSaveDB = document.getElementById('btn-save-db')
const btnNewTake = document.getElementById('btn-new-take')

// * HTML const for rendering quiz
const quizContainer = document.getElementById('quiz-container')
const quizForm = document.getElementById('quiz-form')
const quizName = document.getElementById('quiz-name')
const quizDescription = document.getElementById('quiz-description')
const quizQuestionsList = document.getElementById('quiz-questions-list')

// ! *********************************************************************
// ! live coding 
const sort = document.getElementById('sort-succes')

sort.addEventListener('click', handleSort)

function handleSort(e) {
  const userOne = new User(Store.getUser())
  userOne.takes.sort((a, b) => b.num_correct_answers - a.num_correct_answers)
  userOne.appendUserToDom()
}
// ! *********************************************************************
btnShowLogin.addEventListener('click', handleLogin)

function handleLogin(){
  btnShowLogin.style.display = "none"
  btnShowSignUp.style.display ="none"
  formLogin.style.display = "block"
  btnBackToStart.style.display = "block"
}

btnShowSignUp.addEventListener('click', handleSignUp)

function handleSignUp(){
  btnShowLogin.style.display = "none"
  btnShowSignUp.style.display ="none"
  formSignUp.style.display = "block"
  btnBackToStart.style.display = "block"
}

btnBackToStart.addEventListener('click', backToStart)

function backToStart(){
  console.log('back was clicked')
  btnShowLogin.style.display = "block"
  btnShowSignUp.style.display ="block"
  formSignUp.style.display = "none"
  formLogin.style.display = "none"
  btnBackToStart.style.display = "none"
}

userForm.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()

  usersCall.getUser()
  event.target.reset()
}

btnNewTake.addEventListener('click', handleNewTakeClick)

function handleNewTakeClick(event) {
  Store.removeTake()
  takeCall.createNewTake()
  frontPageDiv.style.display = 'none'

  quizCall.getQuizzes()
}

userResultList.addEventListener('click', removeTake)

function removeTake(e) {
  Take.deleteTakeDOM(e.target)
}
