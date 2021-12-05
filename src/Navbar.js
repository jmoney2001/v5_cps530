import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Navbar() {

    const NavStyle = {
        color: 'purple',
        textDecoration: 'none',
        fontWeight: "bold",
    }
    return (
        <nav>
            <ul className="nav-links" >
                <Link style={NavStyle} to='/'>
                <l1>Home</l1>
                </Link>
                <Link style={NavStyle} to='/page2'>
                <l1>Page2</l1>
                </Link>
                <Link style={NavStyle} to='/page3'>
                <l1>Page3</l1>
                </Link>
                <Link style={NavStyle} to='/page4'>
                <l1>Page4</l1>
                </Link>
                <Link style={NavStyle} to='/page5'>
                <l1>Page5</l1>
                </Link>
                <Link style={NavStyle} to='/page6'>
                <l1>Page6</l1>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;