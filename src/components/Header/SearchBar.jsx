import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {

    const  [seachTerm, setSearchTerm] = useState('')

    const handleChange = (event) =>{
        setSearchTerm(event.target.value)
    }

    return (
      <>
        FontAwesomeIcon icon="check-square" />
        <input
          type="search"
          placeholder="Search..."
          value={seachTerm}
          onChange={handleChange}
        />
        <button></button>
      </>
    );
}
