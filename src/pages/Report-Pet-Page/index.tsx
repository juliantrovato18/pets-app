import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "Ui/titles/Title";
import { MyDropzone } from "Ui/drop-img";
import { Mapbox } from "Ui/Map/Map";
import  {reportPet}  from "../../lib/api"
import { InputComp } from "Ui/inputs/Input";
import { usePetData, useTokenValue } from "hooks";
import { ButtonRosa } from "Ui/buttons/Button";

export function ReportPet(){
    const navigate = useNavigate()
    const [pet, setPet] = usePetData();
    const token = useTokenValue();
    console.log(token, "de report");

    // useEffect(() => {
    //     if (!token) {
    //       navigate("/signin");
    //     }
    //   }, []);

    function handleChange(e){
        const name = e.target.value;
        console.log(name);
        setPet({...pet, petName:name})
    }
    async function reportPetHandler(){
        const petReport = reportPet({
            token,
            petname: pet.petname,
            lat: pet.lat,
            lng: pet.lng,
            petImage: pet.petImage,
            place: pet.petUbi
        })
    }

    return(
        <div className="page">
            <Title children="Reportar mascota perdida" />
            <div>
                <label>
                    <span>Nombre de la mascota</span>
                    <input onChange={handleChange} type="name" name="pet" />
                </label>
                <MyDropzone />
                <Mapbox />
            </div>
                <ButtonRosa onClick={reportPetHandler} children={"reportar como perdida"} />
        </div>
    )
}