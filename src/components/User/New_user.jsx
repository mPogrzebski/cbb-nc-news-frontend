import { useState } from "react";
import { FaUser } from "react-icons/fa";
export default function New_user() {
  const [newUser, setNewUser] = useState(null);
  const [inputUsername, setInputUserName] = useState("");
  
  const handleChange = (event) => {
    setInputUserName(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    setNewUser(inputUsername);

    // Now we send new user details to the server
  };

  return (
    <div className="section">
      <h1 className="mt-5 title is-size-2">Welcome to CBB news community</h1>
      <form
        className="control has-icons-left"
        onSubmit={handleCreateUser}
        onChange={handleChange}
      >
        <div className="field">
          <p className="control">
            <input
              className="input is-primary"
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
              Register
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
