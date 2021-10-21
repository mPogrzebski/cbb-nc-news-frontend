import React, { useEffect, useState, useContext} from "react";
import { useParams } from "react-router";
import { UserContext } from "../../contexts/User";
import { Redirect } from "react-router-dom";

export default function Enter() {
  const userPlaceholder = "jessjelly";
  const { new_user } = useParams();
  const [inputUsername, setInputUserName] = useState("");
  const [finalUsername, setFinalUsername] = useState("");


  const { user, setUser } = useContext(UserContext)

    useEffect(()=>{
        if (inputUsername === userPlaceholder) {
          setUser(finalUsername);
        }
    }, [finalUsername, user])

  if (new_user) {
    return <h1>Create account</h1>;
  }

  const handleChange = (event) => {
    setInputUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFinalUsername(inputUsername);
  };

  if(user){
      return <Redirect to={'/'}></Redirect>
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input type={"text"} placeholder="Username" />
        <button type="submit">Continue</button>
      </form>
      <p>{inputUsername}</p>
      <p>{user}</p>
    </div>
  );
}
