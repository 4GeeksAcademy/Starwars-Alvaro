import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CartaDatos } from "../component/cartaDatos";

export const Especies = ({ }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const especies = store.especies;
	return (
		<div className="container">
			<h1 className="titulo-1">EESPECIES</h1>
			<div className="d-flex justify-content-center">
				<div className="row container">
					{especies.map((element) => {

						return (
							<CartaDatos imagen={element.uid} direccion="infoExtraE"
								nombre={element.name} fuente="species" />
						);
					})
					}
				</div>
			</div>
		</div>
	);
};