import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Title } from "Ui/titles/Title";
import { SigninForm } from "components/SignInForm/SigninForm";
import css from "./index.css"
import { useToken, useUserData, useUserId } from "hooks";
import { ButtonRosa } from "Ui/buttons/Button";
import { createUser } from "lib/api";


export function MisDatos(){

    const [userData, setUserData] =useUserData();
    const [token, setToken] = useToken();
    const [id, setId] = useUserId();
    const navigate = useNavigate();
    const email = useParams();
    const mail = email.email;
    

    const atrapaSubmit = async(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        const pass2 = e.target.password2.value;
        
        if(password === pass2){
            console.log("entra al crear");
            createUser(name, mail, password).then((res)=>{
                res.json().then((data)=>{
                    console.log(data);
                    setId(data.user_id)
                    console.log(id);
                    navigate("/signin")
                })
               
            })
        }else{
            console.log("algo salio mal");
        }
       
    }
    return (
        <>
            <Title children="Mis Datos" />
            <div className={css.container}>
            <form onSubmit={atrapaSubmit} className={css.form}>
                <div className={css.content}>
                    <label htmlFor="">
                        <h3>Tu Nombre</h3>
                    <input className={css.input} type="text" name="name" />
                    </label>
                </div> 
                <div className={css.content2}>
                    <label htmlFor="">
                        <h3>Tu Contraseña</h3>
                    <input  className={css.input} type="password" name="password" />
                    </label>
                    <label htmlFor="">
                        <h3>Repetir Contraseña</h3>
                    <input className={css.input} type="password" name="password2" />
                    </label>
                </div>
            <ButtonRosa children="guardar" />
            
            
        </form>
        </div>
        </>
    )
}