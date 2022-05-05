import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Card } from "../components/card";
import {useSearchResults} from "hooks"

function Search() {
    
    const searchResults = useSearchResults();
    console.log(searchResults, "results");
    
    
    return (
        <div>
            <h1 className="search-title">Tus Resultados</h1>
            {searchResults.map((r) => (
                <Link to={"/item/" + r.id}>
                    <Card
                        key={r.id}
                        title={r.title}
                        img={r.thumbnail}
                        price={r.price}
                    />
                </Link>
            ))}
        </div>
    );
}

export { Search };
