import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CartaDatos } from "../component/cartaDatos";

export const Planetas = ({ }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const planetas = store.planetas;
	return (
		<div className="container">
			<h1 className="titulo-1">PLANETAS</h1>
			<div className="d-flex justify-content-center">
				<div className="row container">
					{planetas.map((element) => {

						return (
							<CartaDatos imagen={element.uid} direccion="infoExtraPl"
								nombre={element.name} fuente="planets" />
						);
					})
					}
				</div>
			</div>
		</div>
	);
};