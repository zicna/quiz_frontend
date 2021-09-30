const port = "http://localhost:3000"
const usersCall = new UserService(port)

// usersCall.getUser()

//*HTML Elements constants
const mainQuizDiv = document.getElementById("main-container")
const startQuiz = document.getElementById("btn-start")
const userForm = document.getElementById("user-form")





userForm.addEventListener("submit", usersCall.getUser)