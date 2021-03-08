import React, {FC, ReactElement} from 'react';
import {NavLink} from 'react-router-dom';

import "./Navbar.scss";

const Navbar: FC = (): ReactElement => {
	return(
		<nav className="Navbar">
			<ul className="Navbar__links">
				<li className="Navbar__item">
					<NavLink to="/">Home</NavLink>
				</li>
				<li className="Navbar__item">
					<NavLink to="/about">About</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;
