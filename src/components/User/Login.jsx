import React, { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../contexts/User";

export default function Enter() {
  const userPlaceholder = "jessjelly";

  const [inputUsername, setInputUserName] = useState("");
  const [finalUsername, setFinalUsername] = useState("");

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (inputUsername === userPlaceholder) {
      setUser(finalUsername);
      localStorage.setItem("user", user);
    }
  }, [finalUsername, inputUsername, user, setUser]);

  const handleChange = (event) => {
    setInputUserName(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setFinalUsername(inputUsername);
  };

  if (user) {
    return <Redirect to={"/"}></Redirect>;
  }

  return (
    <div className="section">
      <h2 className="mt-5 title is-size-2">Log in</h2>
      
      <form
        className="control has-icons-left"
        onSubmit={handleLogin}
        onChange={handleChange}
      >
        <div className="field">
          <p className="control">
            <input
              className="input is-primary "
              type={"text"}
              placeholder="Username"
            />
            <span className="icon is-left">
              <FaUser />
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control">
            <button className="button is-primary" type="submit">
              Login
            </button>
          </p>
        </div>

      </form>
    </div>
  );
}
