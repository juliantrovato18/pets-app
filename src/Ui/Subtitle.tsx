import React from "react";
import css from "./title.css"

type title = {
    children:string
}

export function SubTitle({children}:title){
    return <h4 className={css.title}>{children}</h4>
}