import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserProvider from "./contexts/User";
import "bulma/css/bulma.min.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <a href="https://github.com/mPogrzebski" target={"_blank"} rel="noreferrer">
              Mateusz Pogrzebski
            </a>
          </p>
        </div>
      </footer>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
