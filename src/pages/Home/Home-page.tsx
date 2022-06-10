import React, {useState, useEffect} from "react";
import { ButtonRosa } from "Ui/buttons/Button";
import { SubTitle } from "Ui/subtitle/Subtitle";
import * as _ from "lodash"
import { Card } from "components/Card/card";
import { getPetsAround } from "lib/api";
import { Title } from "Ui/titles/Title";
import css from "./Home.css"

export function HomePage(){
    const [loc, setLoc] = useState({lat:0, lng:0});
    const [pets, setPets] = useState(null);
    
    useEffect(()=>{
        if(loc){
            getPets()
        }
    },[loc])

    const getPets = async ()=>{
        const petsAround = await (await (await getPetsAround(loc.lat, loc.lng)).json())
        setPets(petsAround);
    }
    console.log(pets);

    const location = async ()=>{
        navigator.geolocation.getCurrentPosition(async (geo) => {
            const { latitude, longitude } = geo.coords;
            setLoc({ lat: latitude, lng: longitude });
            console.log(loc);
          });
        };
        console.log(loc);
    
    return pets? (
        <div className ={css.home}>
            <Title  children="Mascotas perdidas cerca tuyo" />
            <div className={css.petsContainer}>
                {_.map(pets,(c)=>{
                    return (<Card key={c.objectID} img={c.petImage} place={c.place} name={c.petname} />
                    )
                })}
            </div>
        </div>
        
    ):
    (
        <div  className={css.home}>
            <Title  children="Mascotas perdidas cerca tuyo" />
            <SubTitle children="Para ver las mascotas reportadas cerca tuyo necesitamos permiso para conocer tu ubicación." />
            <ButtonRosa handleClick={location} children="Dar mi ubicacion" />
        </div>
    )
}