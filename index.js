const port = "http://localhost:3000/"
const categoriesCall = new CategoryService(port)

//*HTML Elements constants
const categoryContainer = document.getElementById("category-container")

categoriesCall.getCategories()