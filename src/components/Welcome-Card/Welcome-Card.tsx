import React, {useState} from "react";
import {Title} from "Ui/titles/Title";
import { useNavigate } from "react-router-dom";
import {SubTitle} from "Ui/subtitle/Subtitle";
import { ButtonRosa } from "Ui/buttons/Button";
import css from "./Welcome-Card.css";


// type petsProps = {
//     img: string;
//     name: string;
//     place: string;
//     key: any;
//     id:number
// };

function WelcomeCard({img, name, place, id}) {

    const navigate = useNavigate();
    const [active, setActive] = useState(false);

    function handleClick(e){
        e.preventDefault();
        setActive(!active)
        
    }
    function handleClose(e){
        e.preventDefault();
        setActive(!active)
        
    }
    return  (
        <div className={css.cardContainer} key={id}>
            <div style={{ display: active? "flex" : "none" }}>
                    <button onClick={handleClose}>X</button>
                    <div>
                        <h2>Reporta info de la mascota</h2>
                        <label>
                            <span>Tu nombre</span>
                            <input type="text" name="name" />
                        </label>
                        <label>
                            <span>Tu telefono</span>
                            <input type="number" name="number" />
                        </label>
                        <label>
                            <span>¿Donde lo viste?</span>
                            <textarea></textarea>
                        </label>
                        <ButtonRosa children="Enviar" />
                    </div>
            </div>
            <img style={{maxWidth: "70px", maxHeight:"60px"}} src={img} alt="" />
            <div className={css.title}>
                <Title children={name}/>
            </div>
            <div className={css.subtitle}>
                <SubTitle children={place} />
                <h5 onClick={handleClick}>Reportar informacion</h5>
            </div>
        </div>
    );
}

export { WelcomeCard };