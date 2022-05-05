import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import {useRecoilState} from "recoil"
import {userNameAtom} from "atoms";
import {useId, search, queryAtom} from "../hooks"
import { Layout } from "components/layout";




function App(){
    const params = useParams();
    
   
    
    return  <div>
                <div>
                    <h3>Hace tu busqueda desde el buscador que se encuentra arriba!</h3>
                </div>
            </div>
           
        
        
}



export {App}