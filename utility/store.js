class Store {
  // *once user is 'logged in' we need to persist his credential
  static setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  static getUser() {
      let user;
      if(localStorage.getItem('user') === null){
        //!   alert not loggedin
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

  static setTake() {}

  static removeUser() {}
}