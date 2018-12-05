//import request from "reqwest";
//import when from "when";

class AuthService {
  login(username, password) {
    return fetch("/login", {
      method: "PUT",
      headers: {
        //Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.account_id);
        return {
          account_id: responseJson.account_id,
          account_type: responseJson.account_type,
          session_token: responseJson.session_token
        };
      });
  }

  logout() {
    //LoginActions.logoutUser();
  }

  /*signup(username, password, extra) {
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
  }*/
}

export default new AuthService();
