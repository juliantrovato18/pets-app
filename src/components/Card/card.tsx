import React from "react";
import {Title} from "Ui/titles/Title";
import {SubTitle} from "Ui/subtitle/Subtitle";
import css from "./Card.css";


type petsProps = {
    img: string;
    name: string;
    place: string;
    key: any;
};

function Card(props: petsProps) {
    return (
        <div className={css.cardContainer}>
            <img className={css.image} src={props.img} alt="" />
            <div className={css.title}>
                <Title children={props.name}/>
            </div>
            <div className={css.subtitle}>
                <SubTitle children={props.place} />
                <img src="../../img/lapiz.png" className={css.image2} />
            </div>
        </div>
    );
}

export { Card };
