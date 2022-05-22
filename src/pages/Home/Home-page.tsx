import React, {useState} from "react";
import { ButtonRosa } from "Ui/Button";
import { SubTitle } from "Ui/Subtitle";
import { Title } from "Ui/Title";
import css from "./Home.css"

export function HomePage(){
    const [loc, setLoc] = useState({lat:"", lng:""});

    const location = async ()=>{
        navigator.geolocation.getCurrentPosition(async (geo) => {
            const { latitude, longitude } = geo.coords;
            setLoc({ lat: latitude, lng: longitude });
            console.log(loc);
          });
        };
    
    return (
        <div  className={css.home}>
            <Title  children="Mascotas perdidas cerca tuyo" />
            <SubTitle children="Para ver las mascotas reportadas cerca tuyo necesitamos permiso para conocer tu ubicación." />
            <ButtonRosa handleClick={location} children="Dar mi ubicacion" />
        </div>
    )
}