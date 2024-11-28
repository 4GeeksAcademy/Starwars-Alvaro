import React, { Component, useState } from "react";
import { Boton } from "./boton";

export const Navegacion = ({ }) => {

    return (
        <div className="d-flex justify-content-evenly navegacion">
            <Boton vista="/pelis" titulo="PELICULAS" /><br />
            <Boton vista="/personajes" titulo="PERSONAJES" /><br />
            <Boton vista="/planetas" titulo="PLANETAS" /><br />
            <Boton vista="/especies" titulo="ESPECIES" /><br />
            <Boton vista="/naves" titulo="NAVES" /><br />
            <Boton vista="/vehiculos" titulo="VEHICULOS" /><br />
        </div>
    )
}
