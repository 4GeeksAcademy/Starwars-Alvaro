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
			<h1 className="titulo-1 mt-3">PELICULAS</h1>
			<Pelis />
			<h1 className="mt-3">PERSONAJES</h1>
			<Personajes />
			<h1 className="mt-3">PLANETAS</h1>
			<Planetas />
			<h1 className="mt-3">ESPECIES</h1>
			<Especies />
			<h1 className="mt-3">NAVES</h1>
			<Naves />
			<h1 className="mt-3">VEHICULOS</h1>
			<Vehiculos />
		</div>

	);
};
