import React from "react";

type searchProps = {
    img: string;
    title: string;
    price: number;
    key: any;
};

function Card(props: searchProps) {
    return (
        <div className="card-container">
            <img className="img" src={props.img} alt="" />
            <div>
                <h3>{props.title}</h3>
                <p>{props.price}</p>
                <a href="google.com.ar">Ver mas</a>
            </div>
        </div>
    );
}

export { Card };
