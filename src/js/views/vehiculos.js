import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CartaDatos } from "../component/cartaDatos";

export const Vehiculos = ({ }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const vehiculos = store.vehiculos;
	return (
		<div className="d-flex justify-content-center">
			<div className="row container">
				{vehiculos.map((element) => {				
					
					return (
						<CartaDatos imagen={element.uid} 
						nombre={element.name} fuente="vehicles"/>
					);
				})
				}
			</div>
		</div>
	);
};