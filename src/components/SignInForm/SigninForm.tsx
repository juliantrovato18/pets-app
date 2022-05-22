import React from "react";
import { ButtonRosa } from "Ui/Button";
import { InputComp } from "Ui/Input";
import css from "./signinForm.css";


export function SigninForm({handleSubmit, name, type}){
    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <div>
            <InputComp label="Tu Nombre" name={name} type={type} />
            </div>
            <div className={css.container}>
            <InputComp label="Tu Contraseña" name={name} type={type} />
            <InputComp label="Repetir Contraseña" name={name} type={type} />
            </div>
            <div className={css.containerButton}>
            <ButtonRosa children="Guardar" />
            </div>
        </form>
    )
}