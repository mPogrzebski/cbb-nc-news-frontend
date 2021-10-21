import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getSearch } from "../utils/api";

export default function Search(props) {
  const search = useLocation().search;

  const [searchResults, setSearchResults] = useState([]);

  const searchWord = new URLSearchParams(search).get("searchWord");

  useEffect(() => {
    getSearch(searchWord)
      .then((response) => {
        console.log(response);
        setSearchResults(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchWord]);

  if (searchResults.length === 0) {
    return <p>No results for {searchWord}</p>;
  }

  return (
    <div>
      <h1>Hi</h1>
      <p>{searchWord}</p>
      <ul>
        {searchResults.map((article) => {
          return (
            <li key={article.article_id}>
              <p>{article.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
