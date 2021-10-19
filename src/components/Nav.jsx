import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <h2>Nav bar</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/articles'>Articles</Link>
            </nav>
        </div>
    );
};

export default Nav;