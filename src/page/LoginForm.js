import React, {useRef} from "react";
import classes from './LoginForm.module.css';
import { Link } from "react-router-dom";
import Card from "../UI/Card";


const LoginForm = (props) => {

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const loginHandler = (event) => {
        event.preventDefault();
        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        props.onLogin(enteredUsername, enteredPassword);
    };
    
    return(
        <Card className={classes.card}>
            <form className={classes.LoginForm}>
                <label htmlFor="id">Username</label>
                <input type="text" id="id" className={classes.input} ref={usernameInputRef}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className={classes.input} ref={passwordInputRef}/>
                <button type="submit" className={classes.LoginButton}>Login</button>
            </form>
            <Link to='/' className={classes.homebtn}><button>Back to Home</button></Link>
        </Card>
    );
};

export default LoginForm;