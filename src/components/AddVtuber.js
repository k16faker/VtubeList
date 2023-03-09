
import React, {useRef} from "react";
import Card from "../UI/Card";
import classes from './AddVtuber.module.css';

const AddVtuber = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const teamInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredTeamName = teamInputRef.current.value;
        props.AddList(enteredName, enteredUserAge, enteredTeamName);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
        teamInputRef.current.value = "";
    };

    return (
        <Card>
            <form onSubmit={submitHandler} className={classes.AddForm}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameInputRef}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" ref={ageInputRef}/>
                <label htmlFor="team">team</label>
                <input type="text" id="team" ref={teamInputRef}/>
                <button type="submit" className={classes.AddButton}>submit</button>
            </form>
        </Card>
    );
};

export default AddVtuber;