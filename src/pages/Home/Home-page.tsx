import React, {useState, useEffect} from "react";
import { ButtonRosa } from "Ui/buttons/Button";
import { SubTitle } from "Ui/subtitle/Subtitle";
import * as _ from "lodash"
import Swal from "sweetalert2";
import { WelcomeCard } from "components/Welcome-Card/Welcome-Card";
import { getPetsAround } from "lib/api";
import { Title } from "Ui/titles/Title";
import css from "./Home.css"

export function HomePage(){
    const [loc, setLoc] = useState({lat:null, lng:null});
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
        Swal.fire({
            title:"esperando que cargue tu direccion",
            icon:"info"
        })
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
                    return (<WelcomeCard key={c.objectID} id={c.objectID} img={c.petImage} place={c.place} name={c.petname} />
                    )
                })}
            </div>
        </div>
        
    ):
    (
        <div className={css.home}>
            <Title  children="Mascotas perdidas cerca tuyo" />
            <SubTitle children="Para ver las mascotas reportadas cerca tuyo necesitamos permiso para conocer tu ubicación." />
            <ButtonRosa onClick={location} children="Dar mi ubicacion" />
        </div>
    )
}