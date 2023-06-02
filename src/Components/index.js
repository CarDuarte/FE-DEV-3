import React from "react";
import "../Style/style.css";

const Welcome = () => {
  return (
    <main className="welcome">
      <title>Welcome Page</title>
      <body>
        <div className="container">
          <div className="login-left">
            <div className="login-header">
              <h1>Welcome to App</h1>
              <p>Please login to use the platform</p>
            </div>
            <form className="login-form">
              <div className="login-form-content">
                <div className="form-item">
                  <label htmlFor="email">Enter email</label>
                  <input type="text" id="email"></input>
                </div>
                <div className="form-item">
                  <label htmlFor="password">Enter Password</label>
                  <input type="password" id="password"></input>
                </div>

                <div className="form-item">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id="rememberMeCheckbox"
                      checked
                    ></input>
                    <label
                      htmlFor="rememberMeCheckbox"
                      className="checkboxLabel"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <button type="submit">Sign In</button>
              </div>
              <div className="login-form-footer"></div>
            </form>
          </div>
          <div className="login-right"></div>
        </div>
      </body>
    </main>
  );
};

export default Welcome;
