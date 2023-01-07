import React from "react";
import Card from "../UI/Card";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Card>
            <header className={classes.header}>
            <h1>Vtube List</h1>
            <ul className={classes.ul}>
                <li>Home</li>
                <li>My List</li>
                <li>Discover</li>
                <li>Login</li>
            </ul>
        </header>
        </Card>
    );
}

export default Header