import React, { Component, useState } from "react";

export const CartaDatos = ({ nombre, imagen, fuente }) => {

	return (
	<div className="col-md-3 mt-3">
		<div className="card">
			<img src={`https://starwars-visualguide.com/assets/img/${fuente}/${imagen}.jpg`} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{nombre}</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	</div>
)
}