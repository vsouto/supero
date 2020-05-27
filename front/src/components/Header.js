import React from 'react'
import tasklistImg from '../assets/tasklist.png'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerImage: {
    width: "50%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  }
});

export default function Header() {

  const classes = useStyles()

  return (
      <header className="header">
        <img
          src={tasklistImg}
          className={classes.headerImage}
          alt="ToDoList"
        />
        <h1>Supero To-Do List</h1>
      </header>
  )
}

