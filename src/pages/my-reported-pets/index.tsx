import React, {useEffect, useState} from "react";
import { useTokenValue } from "hooks";
import { Card } from "components/Card/card";
import { Title } from "Ui/titles/Title";
import css from "./index.css"
import { myReportedPets } from "lib/api";
import { useNavigate } from "react-router-dom";
import * as _ from "lodash";
import { SubTitle } from "Ui/subtitle/Subtitle";

export function ReportedPetsPage(){
    const token = useTokenValue();
    const navigate = useNavigate();
    const [myPets, setMyPets] = useState([{}]);
    const userToken = token.token;
    console.log(userToken, "hay token?");

    useEffect(()=>{
        if(token){
            myReportedPets(userToken).then((res)=>{
                    setMyPets(res);
                    console.log(res, "las reees");
            })
        }else{
            navigate("/signin");
        }
    },[])
    console.log(myPets);

    return myPets.length == 0?     (
        <div className={css.page}>
            <Title children="Mis mascotas reportadas" />
            <SubTitle children="Aun no reportaste a ninguna mascota" />
        </div>
    ):
    (
        <div className={css.page}>
            <Title  children="Mis mascotas reportadas" />
            <div className={css.cardContainer}>
                {_.map(myPets,(p)=>{
                    console.log(p);
                    return(<Card key={p.id} id={p.id} img={p.petImage} place={p.place} name={p.petname} />)
                })}
            </div>
        </div>
    )

}