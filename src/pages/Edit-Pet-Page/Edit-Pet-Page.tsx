import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Title } from "Ui/titles/Title";
import { SubTitle } from "Ui/subtitle/Subtitle";
import { MyDropzone } from "Ui/drop-img";
import Swal from "sweetalert2";
import { InputPet } from "Ui/Input-pet/Input2";
import css from "./Edit-Pet-Page.css";
import { Mapbox } from "Ui/Map/Map";
import { editPet } from "lib/api";
import { ButtonRosa } from "Ui/buttons/Button";
import { useTokenValue } from "hooks";
import { deletePet } from "lib/api";
import { usePetData } from "hooks";

export const EditPetPage = ()=>{
    const params = useParams();
    const id = params.id;
    const useT = useTokenValue();
    const token = useT.token;
    const [pet, setPet] = usePetData();
    console.log(id, token);
    const navigate = useNavigate();

    async function editPetHandler(e){
    const petEditada = {
        id:id,
        token:token,
        place:pet.place,
        lat:pet.lat,
        lng:pet.lng,
        petname:pet.petname,
        petImage:pet.petImage
    } 
    try {
        Swal.fire({
            title:"Mascota editada con exito",
            icon:"success"
        })
        const petR = await editPet(petEditada)
        setPet(petR);
        console.log(pet, "ms");
        navigate("/mypets");
        } catch (error) {
            Swal.fire({
                title:"Tu mascota no fue editada",
                icon:"error"
            })
        console.log(error);
        }
    }

    async function deletePetHandler(e){
        const reportDeleted = await deletePet({token, id})
        console.log(reportDeleted);
        navigate("/mypets");
    }
    return (
        <div className={css.page}>
            <Title children="Edita mascota perdida" />
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
            <div className={css.containsButtons}>
                <ButtonRosa onClick={editPetHandler} children={"guardar"} />
                <button className={css.despublicar} onClick={deletePetHandler}>Despublicar</button>
            </div>
        </div>
    )
}