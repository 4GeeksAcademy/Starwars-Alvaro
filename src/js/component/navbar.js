import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar fondo-nav navbar-light pt-0">
			<Link to="/">
				<div className="logo">
					<h1 className="titulo-nav">STAR WARS</h1>
				</div>
			</Link>

		</nav>
	);
};
