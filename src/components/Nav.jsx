import { useContext, useState } from "react";
import { GiMegabot } from "react-icons/gi";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import SearchBar from "./Header/SearchBar";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div>
      <nav
        className="navbar is-primary has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/">
            <div className="navbar-item is-size-2">
              <GiMegabot />
            </div>
          
          </Link>
          <div className="navbar-item">
            <SearchBar />
          </div>
          <a
            onClick={() => {
              setIsActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/topics">
              Topics
            </Link>
            <Link className="navbar-item" to="/articles">
              Articles
            </Link>
          </div>

          <div className="navbar-end">
            {user ? (
              <>
                <p className="navbar-item">User {user}</p>
                <Link className="navbar-item" to={"/"}>
                  <button
                    className="button is-danger is-small"
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link className="navbar-item" to={"/enter"}>
                  <button className="button is-primary is-small">Log in</button>
                </Link>

                <Link className="navbar-item" to={"/enter/new_user"}>
                  <button className="button is-primary is-small">
                    Create account
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
