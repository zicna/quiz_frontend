class Store {
  // *once user is 'logged in' we need to persist his id
  static setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  static getUser() {
      let user;
      if(localStorage.getItem('user') === null){
        //!   alert not logged in
        // user = ""
      }else {
          user = JSON.parse(localStorage.getItem('user'))
      }
      return user
  }
  //* once user is logged out we need to remove its credential from local storage
  static removeUser() {
      localStorage.removeItem('user')
  }

  static setTake(take) {
    localStorage.setItem("take", JSON.stringify(take) )
  }
  static getTake(){
    const take = JSON.parse(localStorage.getItem('take'))
    return take
  }

  static removeTake() {
    localStorage.removeItem("take")
  }

  static clear(){
    localStorage.clear()
  }
}
