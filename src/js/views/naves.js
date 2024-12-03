import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CartaDatos } from "../component/cartaDatos";

export const Naves = ({ }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const naves = store.naves;
	return (
		<div className="container">
			<h1 className="titulo-1">NAVES</h1>
			<div className="d-flex justify-content-center">
				<div className="row container">
					{naves.map((element) => {

						return (
							<CartaDatos imagen={element.uid} direccion="infoExtraN"
								nombre={element.name} fuente="starships" />
						);
					})
					}
				</div>
			</div>
		</div>
	);
};