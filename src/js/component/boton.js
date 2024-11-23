import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

export const Boton = ({ vista, titulo }) => {

    return (
        <div>
            <Link to={vista}><button className="boton mt-2">{titulo}</button></Link>
        </div>
    )
}