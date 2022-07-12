import React, {useState} from "react";
import {Title} from "Ui/titles/Title";
import { TitlePetCard } from "Ui/Title-Pet-Card/Title-Pet-Card";
import { useTokenValue } from "hooks";
import { useNavigate } from "react-router-dom";
import {SubTitle} from "Ui/subtitle/Subtitle";
import { ButtonRosa } from "Ui/buttons/Button";
import css from "./Welcome-card.css";
import {createReport} from "../../lib/api"




function WelcomeCard({img, name, place, id}) {

    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const tvalue = useTokenValue();
    const token = tvalue.token;

    function handleClick(e){
        if(!token){
            navigate("/signin");
        }
        e.preventDefault();
        setActive(true)
        
    }
    function handleClose(e){
        e.preventDefault();
        setActive(false)
        
    }

    async function handleSubmit(e){
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.number.value;
        const info = e.target.textarea.value;
        const report = await createReport({
            token:token,
            name,
            phone,
            text: info,
            id
        })
        setActive(false);
        console.log(report);
    }


    return  (
        <div className={css.cardContainer} key={id}>
            <div style={{ display: active? "flex" : "none" }}>
                    <button onClick={handleClose}>X</button>
                    <div className={css.reportsheet}>
                        <button className={css.close} onClick={handleClose}>X</button>
                        <h2>Reporta info de la mascota</h2>
                        <form onSubmit={handleSubmit} className={css.form}>
                            <label>
                                <span>Tu nombre</span>
                            </label>
                            <input type="text" name="name" />
                            <label>
                                <span>Tu telefono</span>
                            </label>
                            <input type="number" name="number" />
                            <label>
                                <span>¿Donde lo viste?</span>
                            </label>
                            <textarea name="textarea"></textarea>
                            <ButtonRosa children="Enviar" />
                        </form>
                    </div>
            </div>
            <img style={{maxWidth: "320px", maxHeight:"120px"}} src={img} alt="" />
            <div className={css.title}>
                <TitlePetCard children={name}/>
            </div>
            <div className={css.subtitle}>
                <SubTitle children={place} />
                <h5 onClick={handleClick}>Reportar informacion</h5>
            </div>
        </div>
    );
}

export { WelcomeCard };