import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [finalSearch, setFinalSearch] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    setFinalSearch(searchTerm);
    setSearchTerm("");
    event.preventDefault();
    setRedirect(true);
  };

  return (
    <>
      {redirect ? (
        <Redirect to={`/search?searchWord=${finalSearch}`}></Redirect>
      ) : null}
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          name="search"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </>
  );
}
