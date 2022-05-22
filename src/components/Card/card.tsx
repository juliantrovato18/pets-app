import React from "react";
import {Title} from "Ui/Title";
import {SubTitle} from "Ui/Subtitle";
import css from "./Card.css";
import "../../img/lapiz.png";

type petsProps = {
    img: string;
    title: string;
    price: number;
    key: any;
};

function Card(props: petsProps) {
    return (
        <div className={css.cardContainer}>
            <img className={css.image} src={props.img} alt="" />
            <div className={css.title}>
                <Title children="Bobby"/>
            </div>
            <div className={css.subtitle}>
                <SubTitle children="Nuñez" />
                <img src="../../img/lapiz.png" className={css.image2} />
            </div>
        </div>
    );
}

export { Card };
