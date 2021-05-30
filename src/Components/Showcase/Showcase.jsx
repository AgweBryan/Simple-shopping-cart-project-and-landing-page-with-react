import React from "react";
import "./scss/style.css";

function Showcase() {
	return (
		<section className="showcase">
			<div className="content">
				<h1>Web design with react</h1>
				<button className="continue">Continue</button>
				<a href="#targetElement" className="scroll-to-bottom">
					Scroll to bottom
				</a>
			</div>
		</section>
	);
}

export default Showcase;
