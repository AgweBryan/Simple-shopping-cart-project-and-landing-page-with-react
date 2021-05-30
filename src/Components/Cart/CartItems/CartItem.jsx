import React from "react";
import "./scss/style.css";

function CartItem({ product, onAdd, onReduce }) {
	let price = product.price * product.qty;

	return (
		<div className="item">
			<div className="image">
				<img src={product.url} alt={product.productName} />
			</div>
			<div className="add-reduce">
				<button className="add" onClick={() => onAdd(product)}>
					+
				</button>
				{product.qty}
				<button className="reduce" onClick={() => onReduce(product)}>
					-
				</button>
			</div>
			<div className="itemPrice">${price.toFixed(2)}</div>
		</div>
	);
}

export default CartItem;
