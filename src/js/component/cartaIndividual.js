import React, { Component } from "react";

export const CartaIndividual = ({ foto, nombre, dato1, dato2, dato3, dato4, dato5, dato6, dato7 }) => (
    <div clasName="">
        <div className="row ms-1">
            <img src={foto} className="col-md-4 img-info"
                alt="..." />
            <div className="col-md-6">
                <h1 className="titulo-info ">{nombre}</h1>
                <p>{dato1}</p>
                <p>{dato2}</p>
                <p>{dato3}</p>
                <p>{dato4}</p>
                <p>{dato5}</p>
                <p>{dato6}</p>

            </div>
        </div>
        <div className="">

        </div>
    </div>
);