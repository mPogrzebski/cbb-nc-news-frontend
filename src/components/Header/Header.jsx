import {useContext} from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>CBB News</h1>
      <SearchBar />

      <Link to={'/enter'}>
        <button>Log in</button>
      </Link>

      <Link to={'/enter/new_user'}>
        <button>Create account</button>
      </Link>
    </div>
  );
};

export default Header;
