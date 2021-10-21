import { useContext } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/User";
const Header = () => {
  const { user, setUser} = useContext(UserContext);

  const logoutUser = () =>{
    setUser(null)
  }


  return (
    <div>
      <h1>CBB News</h1>
      <SearchBar />

      {user ? (
        <>
          Logged in as {user}
          <Link to={"/"}>
            <button onClick={logoutUser}>Logout</button>
          </Link>
        </>
      ) : (
        <>
          <Link to={"/enter"}>
            <button>Log in</button>
          </Link>

          <Link to={"/enter/new_user"}>
            <button>Create account</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
