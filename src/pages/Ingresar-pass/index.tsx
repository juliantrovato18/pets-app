import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToken, useUserData, useUserId } from "hooks";
import {verifyMail, signIn} from "../../lib/api"
import { ButtonRosa } from "Ui/buttons/Button";
import { InputComp } from "Ui/inputs/Input";
import { Title } from "Ui/titles/Title";
import css from "./index.css";

export function PassPage(){
    const {email} = useParams();
    const mail = {email}.email;
    const [mailExist, setMailExist] = useState(false); 
    const navigate = useNavigate();
    const [token, setToken] = useToken();
    const [id, setId] = useUserId();
    const [user, setUser] = useUserData();

    useEffect(()=>{
        if(token){
            navigate("/mypets");
        }
    },[token]) 
    
    

    useEffect(()=>{
        verifyMail(mail).then((resp)=>{
            resp.json().then((data)=>{
                if(data == null){
                    navigate("/info/"+mail);
                }else{
                    console.log(data, "data para el user");
                setUser({userEmail:data.email})
                setMailExist(true)
                }
                
            })
        })
    },[mail])
    console.log(user);
    const userMail = user.userEmail;

    function handleSubmit(e){
        e.preventDefault();
        const pass = e.target.password.value;
        if(mailExist == true){
            signIn(userMail, pass).then((res)=>{
                res.json().then((data)=>{
                    setToken({token:data.token})
                    setId({userId:data.userId})
                })
            })
        }else{
            console.log("xd");
        }
        
    }

    return (
        <div>
            <form className={css.root} onSubmit={handleSubmit}>
            <Title children="Ingresar" />
            <InputComp label="Password" name="password" type="password" />
            <ButtonRosa children="Siguiente" />
            </form>
        </div>
    )
}