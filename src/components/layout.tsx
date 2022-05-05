import React from "react";
import {SearchForm} from "./Search-form"
import { Outlet, useParams } from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil"
import  style from "./layout.css"
import {userNameAtom, userId} from "atoms";
import {useId, useSearchResults} from "../hooks";

function Layout(){
    
    const [userName, setUserName] = useRecoilState(userNameAtom);
    const id = useId();
    const results = useSearchResults();
    
    

    return (
        <div className = {style.root}>
            <SearchForm />
            
            <Outlet />
            
        </div>
    )
           
        
           
        
}



export {Layout}