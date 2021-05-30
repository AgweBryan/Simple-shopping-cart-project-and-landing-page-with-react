import React from "react";
import Item from "./Item/Item";
import "./scss/style.css";

function Items({ products, onAdd }) {
	return (
		<div className="products">
			<div className="products-header">
				<h1>Products</h1>
				<div className="underline"></div>
			</div>
			<div className="products-container">
				{products.map((product) => {
					return <Item key={product.id} product={product} onAdd={onAdd} />;
				})}
			</div>
		</div>
	);
}

export default Items;
