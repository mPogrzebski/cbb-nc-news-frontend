import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {

    
    return (
      <div>
        <h1>CBB News</h1>
        <SearchBar />
        <button >Log in</button>
        <button>Create account</button>
      </div>
    );
};

export default Header;