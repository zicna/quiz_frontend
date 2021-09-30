class UserService {
  constructor(port) {
    this.url = port + "/users";
  }

  getUser() {
    //   debugger
    const userInfo = {
      user: {
        username: username.value,
        userEmail: userEmail.value,
      },
    };

    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
      body: JSON.stringify(userInfo),
    };

    fetch(this.url, configObject)
      .then((response) => response.json())
      .then((data) => {
          const user = new User(data)
          user.appendUserToDom()
        });
  }
}
