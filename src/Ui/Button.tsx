import React from "react";
import css from "./Button.css"



export function ButtonComp(props){
    return <button className={css.green}>{props.children}</button>
}

export function ButtonRosa(props){
    return <button onClick={props.handleClick} className={css.pink}>{props.children} </button>
}