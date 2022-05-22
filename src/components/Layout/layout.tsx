import React, {useState} from "react";
import { Outlet, useParams } from "react-router-dom";
import  style from "./layout.css"





function Layout(){
    const [activado, setActivado] = useState(false);
  
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
               <a className={style.link} href="">Reportar Mascota</a>
               <a className={style.link} href="">Mis Mascotas reportadas</a>
           </ul>
           </div>
        <Outlet />
        </div>
    )
           
        
           
        
}



export {Layout}