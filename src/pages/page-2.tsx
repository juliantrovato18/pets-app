import React from "react";
import { Link } from "react-router-dom";

function PageDos() {
    return (
        <div>
            <h1>Page 2</h1>
            <Link to="/otro">Otro</Link>
        </div>
    );
}

export { PageDos };
