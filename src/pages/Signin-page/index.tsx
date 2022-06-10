import React, {useEffect, useState} from "react";
import { Title } from "Ui/titles/Title";
import css from "./index.css";
import { verifyMail } from "lib/api";
import { useParams, useNavigate } from "react-router-dom";
import { SigninForm } from "components/SignInForm/SigninForm";
import { LoginForm } from "components/Login-Form/Login-Form";



export function SigninPage(){
    const navigate = useNavigate();
    const [verify, setVerify] = useState(false);

    
    //probar directamente en el passs
    async function submitHandler(e){
        e.preventDefault();
        const mail = e.target.email.value;
        navigate(mail);
        // if(verify){
        //     console.log(verify);
        //     console.log("entra al navigate mail");
        //     navigate(mail);
        // }else{
        //     console.log("entra al info")
        //     navigate("/info/"+mail)
        // }

        
        
    }
    

    return (
        <div className={css.root}>
            <Title children="Ingresar" />
            <LoginForm handleSubmit={submitHandler} name="email" type="email"  />
        </div>
    )
}