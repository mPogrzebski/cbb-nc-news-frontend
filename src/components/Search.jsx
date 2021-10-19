import React from "react";
import {  useLocation, useParams } from "react-router";

export default function Search(props) {

    const search = useLocation().search;

    const searchTerm = new URLSearchParams(search).get("searchWord");


  return (
    <div>
      <h1>Hi</h1>
      <p>{searchTerm}</p>
    </div>
  );
}
