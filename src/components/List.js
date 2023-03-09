import React from "react";
import Card from "../UI/Card";
import classes from './List.module.css';

const List = (props) => {

    return (
        <Card className={classes.vtubes}>
        { <ul>
            {props.vtubes.map((vtube) => (
            <li key={vtube.id} >
                {vtube.name} ({vtube.age} years old, belongs to {vtube.team})
            </li>
            ))}
        </ul>}
        </Card>
    );
}

export default List;