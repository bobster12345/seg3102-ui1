import request from "reqwest";
import when from "when";

class AuthService {
  /*login(username, password) {
    return this.handleAuth(
      when(
        request({
          url: "http://localhost:3001/login",
          method: "PUT",
          crossOrigin: true,
          type: "json",
          data: {
            username,
            password
          }
        })
      )
    );
  }*/
  login(username, password) {
    return fetch("http://localhost:3001/login", {
      method: "PUT",
      crossOrigin: true,
      type: "json",
      data: {
        username,
        password
      }
    })
      .then(response => response.json())
      .then(parsedJSON => console.log(parsedJSON.result));
  }

  logout() {
    //LoginActions.logoutUser();
  }

  signup(username, password, extra) {
    return this.handleAuth(
      when(
        request({
          url: "http://localhost:3001/signup",
          method: "PUT",
          crossOrigin: true,
          type: "json",
          data: {
            username,
            password,
            extra
          }
        })
      )
    );
  }

  /*handleAuth(loginPromise) {
    return fetch(loginPromise).then(function(response) {
      console.log(response);
    });
  }*/
}

export default new AuthService();