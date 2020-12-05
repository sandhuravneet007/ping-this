import React from 'react';
import logo from "../logo.svg";
import '../App.css';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="Heading">
                Ping This Sample Website
            </p>
        </header>
    );
};

export default Header;