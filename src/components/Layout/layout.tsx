import React, {useState} from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { useTokenValue, useToken, useUserData } from "hooks";
import  style from "./layout.css"





function Layout(){
    const [activado, setActivado] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useUserData();
    const [token, setToken] = useToken();
    const tvalue = useTokenValue();
    const tokenValue = tvalue.token;

    function handleClickBurger(){
        setActivado(!activado)
    }

    function handleCloseSesion(){
        if (tokenValue) {
            setUser({});
            setToken("");
          } else {
            navigate("/login");
          }
        };
    
    

    return token? (
        <div className = {style.main}>
            <div className = {style.root}>
           <img src="../../img/patitapet.png" alt="" />
           <div onClick={handleClickBurger} className={style.nav}>
            <div className={style.bur}></div>
            <div className={style.bur}></div>
            <div className={style.bur}></div>
           </div>
            <div style={{ display: activado? "flex" : "none" }} className={style.window}>
               <a className={style.link} href="info/:email">Mis Datos</a>
               <a className={style.link} href="/">Mascotas cerca tuyo</a>
               <a className={style.link} href="/report">Reportar Mascota</a>
               <a className={style.link} href="/mypets">Mis Mascotas reportadas</a>
               <a className={style.link} onClick={handleCloseSesion}>Cerrar sesion</a>
            </div>
            <div className={style.large}>
                <a className={style.link} href="info/:email">Mis Datos</a>
                <a className={style.link} href="/">Mascotas cerca tuyo</a>
                <a className={style.link} href="/report">Reportar Mascota</a>
                <a className={style.link} href="/mypets">Mascotas reportadas</a>
                <a className={style.link} onClick={handleCloseSesion}>Cerrar sesion</a>
            </div>
           </div>
        <Outlet />
        </div>
    ):
    (
        <div className = {style.main}>
            <div className = {style.root}>
           <img src="../../img/patitapet.png" alt="" />
           <div onClick={handleClickBurger} className={style.nav}>
            <img className={style.burger} src="../../img/burger.png" alt="" />
           </div>
            <div style={{ display: activado? "flex" : "none" }} className={style.window}>
               <a className={style.link} href="info/:email">Mis Datos</a>
               <a className={style.link} href="/">Mascotas cerca tuyo</a>
               <a className={style.link} href="/report">Reportar Mascota</a>
               <a className={style.link} href="/mypets">Mis Mascotas reportadas</a>
            </div>
            <div className={style.large}>
                <a className={style.link} href="info/:email">Mis Datos</a>
                <a className={style.link} href="/">Mascotas cerca tuyo</a>
                <a className={style.link} href="/report">Reportar Mascota</a>
                <a className={style.link} href="/mypets">Mascotas reportadas</a>
            </div>
           </div>
        <Outlet />
        </div>
    )
           
        
           
        
}



export {Layout}