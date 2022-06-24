import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Title } from "Ui/titles/Title";
import { SubTitle } from "Ui/subtitle/Subtitle";
import { MyDropzone } from "Ui/drop-img";
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
        const petR = await editPet(petEditada)
        setPet(petR);
        console.log(pet, "ms");
        navigate("/mypets");
        } catch (error) {
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
                <label className={css.label}>
                    <span>Nombre de la mascota</span>
                    <InputPet/>
                </label>
                <Mapbox />
            </div>
            <div className={css.containsButtons}>
                <ButtonRosa onClick={editPetHandler} children={"guardar"} />
                <button onClick={deletePetHandler}>Despublicar</button>
            </div>
        </div>
    )
}