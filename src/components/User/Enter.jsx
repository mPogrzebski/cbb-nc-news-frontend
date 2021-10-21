import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../contexts/User";
import { Redirect } from "react-router-dom";

export default function Enter() {
  const userPlaceholder = "jessjelly";
  const { new_user } = useParams();
  const [inputUsername, setInputUserName] = useState("");
  const [finalUsername, setFinalUsername] = useState("");
  const [newUser, setNewUser] = useState(null);


  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (newUser) {
      setUser(newUser);
    }

    if (inputUsername === userPlaceholder) {
      setUser(finalUsername);
    }

  }, [finalUsername, newUser, user]);

  const handleChange = (event) => {
    setInputUserName(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    setNewUser(inputUsername);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setFinalUsername(inputUsername);

  };

  if (user) {
    return <Redirect to={"/"}></Redirect>;
  }

  if (new_user) {
    return (
      <>
        <h1>Welcome to CBB news community</h1>
        <form onSubmit={handleCreateUser} onChange={handleChange}>
          <input type={"text"} placeholder="Username" />
          <button type="submit">Create</button>
        </form>
      </>
    );
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin} onChange={handleChange}>
        <input type={"text"} placeholder="Username" />
        <button type="submit">Continue</button>

      </form>
    </div>
  );
}