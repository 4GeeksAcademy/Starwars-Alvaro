import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CartaDatos } from "../component/cartaDatos";
import { Pelis } from "./peliculas";
import { Personajes } from "./personajes";
import { Planetas } from "./planetas";
import { Especies } from "./especies";
import { Naves } from "./naves";
import { Vehiculos } from "./vehiculos";
import { Boton } from "../component/boton";
import { Navegacion } from "../component/navegacion";

export const Home = () => {

	return (

		<div className="container">
			<Pelis />
			<Personajes />
			<Planetas />
			<Especies />
			<Naves />
			<Vehiculos />
		</div>

	);
};
