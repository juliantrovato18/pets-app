import React from "react";
import css from "./Input.css"

type input = {
    label:string,
    name:string,
    type:string,

}

export function InputComp(props:input){
    return <>
            <label className={css.label}>
                <h4>{props.label}</h4>
            </label>
            <input className={css.input} name={props.name} type={props.type}  />
    </>
}