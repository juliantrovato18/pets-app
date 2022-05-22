import React, {useEffect, useState} from "react";
import { Title } from "Ui/Title";
import css from "./index.css";
import { verifyMail } from "lib/api";
import { useParams, useNavigate } from "react-router-dom";
import { SigninForm } from "components/SignInForm/SigninForm";
import { LoginForm } from "components/Login-Form/Login-Form";



export function SigninPage(){
    const navigate = useNavigate();
    
    //probar directamente en el passs
     function submitHandler(e){
        e.preventDefault();
        const mail = e.target.email.value;
        navigate(mail);

        
        
    }

    return (
        <div className={css.root}>
            <Title children="Ingresar" />
            <LoginForm handleSubmit={submitHandler} name="email" type="email"  />
        </div>
    )
}