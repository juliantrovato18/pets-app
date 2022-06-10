import React, {useState} from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import  style from "./layout.css"





function Layout(){
    const [activado, setActivado] = useState(false);
    const navigate = useNavigate();

    function handleClickBurger(){
        setActivado(!activado)
    }
    

    return (
        <div className = {style.main}>
            <div className = {style.root}>
           <img src="../../img/patitapet.png" alt="" />
           <div onClick={handleClickBurger} className={style.nav}>
               <img className={style.burger} src="../../img/burger.png" alt="" />
           </div>
           <ul style={{ display: activado? "flex" : "none" }} className={style.window}>
               <a className={style.link} href="">Mis Datos</a>
               <a className={style.link} href="/report">Reportar Mascota</a>
               <a className={style.link} href="/mypets">Mis Mascotas reportadas</a>
           </ul>
           </div>
        <Outlet />
        </div>
    )
           
        
           
        
}



export {Layout}