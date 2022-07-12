import React from "react";
import css from "./Title-Pet-Card.css"

type title = {
    children:string,
    
}

export function TitlePetCard({children}:title){
   
    return <h3  className={css.title}>{children}</h3>
}