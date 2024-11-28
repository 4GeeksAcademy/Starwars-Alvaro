import React, { Component } from "react";

export const CartaIndividual = ({ foto, nombre, dato1, dato2, dato3, dato4 }) => (
    <div clasName="">
        <div className="row container">
            <img src={foto} className="col-md-4 img-info"
                alt="..." />
            <div className="col-md-8">
                <h1 className="titulo-info ">{nombre}</h1>
                <p>{dato1}</p>
                <p>{dato2}</p>
                <p>{dato3}</p>
                <p>{dato4}</p>

            </div>
        </div>
        <div className="">

        </div>
    </div>
);