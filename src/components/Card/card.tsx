import React from "react";
import {Title} from "Ui/titles/Title";
import { useNavigate } from "react-router-dom";
import { TitlePetCard } from "Ui/Title-Pet-Card/Title-Pet-Card";
import {SubTitle} from "Ui/subtitle/Subtitle";
import css from "./Card.css";


// type petsProps = {
//     img: string;
//     name: string;
//     place: string;
//     key: any;
//     id:number
// };

function Card({img, name, place, id}) {

    const navigate = useNavigate();

    function handleClick(e){
        e.preventDefault();
        navigate("/report/"+id);
    }
    return (
        <div className={css.cardContainer} key={id}>
            <img className={css.image} src={img} alt="" />
            <div className={css.title}>
                <TitlePetCard children={name}/>
            </div>
            <div className={css.subtitle}>
                <SubTitle children={place} />
                <img onClick={handleClick} src="../../img/lapiz.png" className={css.image2} />
            </div>
        </div>
    );
}

export { Card };
