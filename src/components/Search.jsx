import React, { useState, useEffect } from "react";
import {  useLocation, useParams } from "react-router-dom";

export default function Search(props) {

    const search = useLocation().search;

    const [searchTerm, setSearchTerm] = useState('');

    const searchWord = new URLSearchParams(search).get("searchWord");

    useEffect(() => {
      setSearchTerm(searchWord);
      
      

    }, [searchWord])

  return (
    <div>
      <h1>Hi</h1>
      <p>{searchTerm}</p>
    </div>
  );
}
