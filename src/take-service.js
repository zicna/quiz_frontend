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
        debugger;
      });
  }
}
