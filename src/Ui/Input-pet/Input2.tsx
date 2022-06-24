import React from "react";
import { usePetData } from "hooks";

export const InputPet = ()=>{
    const [pet, setPet] = usePetData();

    const handleChange =(e) => {
        setPet({...pet, petname:e.target.value});
        console.log(pet, "de i2")
        
      };
    return (
        <input onChange={handleChange} type="text" name="petname" />
    )
}