import React from "react";
import css from "./Title.css"

type title = {
    children:string,
    
}

export function Title({children}:title){
   
    return <h1  className={css.title}>{children}</h1>
}