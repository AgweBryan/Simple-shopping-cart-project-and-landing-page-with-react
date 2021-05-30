import React, { useState } from "react";
import Logo from "../../images/agwemedialogo.png";
import "./scss/style.css";

function NavBar() {
	const [nav, setNav] = useState(false);

	const displaySolidBackground = () => {
		const scrollHeight = window.pageYOffset;
		if (scrollHeight > 80) {
			setNav(true);
		} else {
			setNav(false);
		}
	};

	window.addEventListener("scroll", displaySolidBackground);

	return (
		<header className={nav ? "main-header header-solid" : "main-header"}>
			<a href="#!" className="logo">
				<img src={Logo} alt="logo" />
			</a>

			<input type="checkbox" name="menu display" id="check" />

			<label htmlFor="check" className="menu">
				<div className="menu__icon"></div>
			</label>

			<nav className="nav">
				<ul className="links">
					<li className="nav-item">
						<a href="#!" className="nav-link">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="#!" className="nav-link">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a href="#!" className="nav-link">
							Documents
						</a>
					</li>
					<li className="nav-item">
						<a href="#!" className="nav-link">
							About
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;
