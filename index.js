const port = "http://localhost:3000/"
const quizzesCall = new QuizService(port)

//*HTML Elements constants
const mainQuizDiv = document.getElementById("main-container")

quizzesCall.getQuizzes()