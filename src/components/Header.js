import React from "react";
import Card from "../UI/Card";
import LoginForm from "../page/LoginForm";
import classes from './Header.module.css';
import { Link,Route,Routes } from "react-router-dom";

const Header = (props) => {
    return (
        <Card>
            <header className={classes.header}>
            <Link to='/'><h1>Vtube List</h1></Link>
            <ul className={classes.ul}>
                <Link to="/"><li>Home</li></Link>
                <li>My List</li>
                <li>Discover</li>
                <Link to="/login"><li>Login</li></Link>
            </ul>
        </header>
        </Card>
    );
}

export default Header