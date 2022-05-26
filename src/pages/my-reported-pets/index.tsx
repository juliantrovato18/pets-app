import React, {useEffect, useState} from "react";
import { useTokenValue, useUserIdValue } from "hooks";
import { Title } from "Ui/Title";
import { myReportedPets } from "lib/api";
import { useNavigate } from "react-router-dom";

export function ReportedPetsPage(){
    const token = useTokenValue();
    const id = useUserIdValue();
    const navigate = useNavigate();
    const [myPets, setMyPets] = useState([]);
    console.log(id);
    console.log(token);
    const userId = id.userId;
    const userToken = JSON.stringify(token.token);
    console.log(userToken);


    useEffect(()=>{
        if(token && id){
            myReportedPets(userId,userToken).then((res)=>{
                res.json().then((data)=>{
                    setMyPets(data)
                    console.log(myPets);
                })
            })
        }else{
            navigate("/signin");
        }
    },[token, id])

    return (
        <div>
            <Title children="Mis mascotas reportadas" />
        </div>
    )
}