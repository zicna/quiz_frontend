class TakeService {
  constructor(port) {
    this.port = port;
  }

  createNewTake() {
    const takeInfo = {
      quiz_id: 1,
      user_id: Store.getUser().id,
    };
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(takeInfo),
    };

    fetch(`${this.port}/takes`, configObject)
      .then((response) => response.json())
      .then((data) => {
        // !this is not needed???
        const newTake = new Take(data);
        Store.setTake(newTake);
      });
  }

  deleteTakeDB(take_id) {
    fetch(`${this.port}/takes/${take_id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        Notification.showAlert(data["message"]["notice"],"info")
      });
  }
}
