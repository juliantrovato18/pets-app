import React from "react";
import {useNavigate} from "react-router-dom"
import stlye from "./Search-form.css"

function SearchForm() {

    const navigate = useNavigate();
    function handleSubmit(e) {
        console.log("entre al submit");
        e.preventDefault();
        const query = e.target.query.value;
        console.log(query, "aca la query");
        navigate("/search/"+ query, {replace:true})

    }

    return (
        <form className={stlye.form} onSubmit={handleSubmit}>
            <input className="input" name="query" />
            <button className="button">Buscar</button>
        </form>
    );
}

export { SearchForm };