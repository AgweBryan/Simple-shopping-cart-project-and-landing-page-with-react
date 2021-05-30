import React from "react";
import "./scss/style.css";

function Item({ product, onAdd }) {
	return (
		<div className="product">
			<img className="product-image" src={product.url} alt={product.productName} />
			<h3 className="product-name">{product.productName}</h3>
			<p className="product-desc">{product.desc}</p>
			<h3 className="product-price">${product.price}</h3>
			<button className="add" onClick={() => onAdd(product)}>
				Add to cart
			</button>
		</div>
	);
}

export default Item;
