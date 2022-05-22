import React from "react";
import { ButtonRosa } from "Ui/Button";
import { InputComp } from "Ui/Input";
import css from "./signinForm.css";


export function LoginForm({handleSubmit, name, type}){
    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <div>
            <InputComp label="Tu Email" name={name} type={type} />
            </div>
            <div className={css.containerButton}>
            <ButtonRosa children="Guardar" />
            </div>
        </form>
    )
}