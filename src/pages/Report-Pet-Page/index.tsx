import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "Ui/titles/Title";
import { MyDropzone } from "Ui/drop-img";
import { Mapbox } from "Ui/Map/Map";
import Swal from "sweetalert2";
import  {reportPet}  from "../../lib/api"
import { InputComp } from "Ui/inputs/Input";
import { InputPet } from "Ui/Input-pet/Input2";
import { usePetData, useTokenValue } from "hooks";
import { ButtonRosa } from "Ui/buttons/Button";
import { SubTitle } from "Ui/subtitle/Subtitle";
import css from "./index.css";

export function ReportPet(){
    const navigate = useNavigate()
    const [pet, setPet] = usePetData();
    const token = useTokenValue();
    const tokens = token.token;
    console.log(token, "de report");

    useEffect(() => {
        if (!token) {
          navigate("/signin");
        }
      }, []);

    // const handleChange =(e) => {
    //     const petname = e.target.value;
    //     setPet({...pet, petname:e.target.value});
        
    //   };
    //   console.log(pet, "el que vale");



    async function reportPetHandler(e){
        e.preventDefault();
        const petReport ={
            petname: pet.petname,
            lat: pet.lat,
            lng: pet.lng,
            petImage: pet.petImage,
            place: pet.place,
            token:tokens,
        }
        console.log(petReport, "cuando entra a la func");
        try {
            Swal.fire({
                title:"mascota reportada con exito",
                icon:"success"
            })
            const petR = await reportPet(petReport)
            setPet(petR);
            navigate("/mypets");
            console.log(pet, "ms");
        } catch (error) {
            Swal.fire({
                title:"algo salio mal",
                icon:"error"
            })
            console.log(error);
        }
        
    }
    

    return(
        <div className={css.page}>
            <Title children="Reportar mascota perdida" />
            <div>
                <SubTitle children="Agrega la foto de tu mascota" />
                <MyDropzone />
                <br />
                <label className={css.label}>
                    <span>Nombre de la mascota</span>
                    <InputPet/>
                </label>
                <Mapbox />
                <br />
            </div>
            <ButtonRosa onClick={reportPetHandler} children={"reportar como perdida"} />
        </div>
    )
}