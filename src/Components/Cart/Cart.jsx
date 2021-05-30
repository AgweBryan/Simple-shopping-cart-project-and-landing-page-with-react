import React from "react";
import CartItem from "./CartItems/CartItem";
import "./scss/style.css";

function Cart({ cart, onAdd, onReduce }) {
	const total = cart.reduce((a, b) => {
		return a + b.price * b.qty;
	}, 0);

	const showAlert = () => {
		return alert("Thank you for your purchase :) !");
	};
	return (
		<div className="cart">
			<div className="cart-header">
				<h1>Cart</h1>
				<div className="underline"></div>
			</div>
			<div className="cart-container">{cart.length === 0 && <h3>The cart is empty.</h3>}</div>
			<div className="basket">
				{cart.map((product) => {
					return <CartItem key={product.id} product={product} onAdd={onAdd} onReduce={onReduce} />;
				})}
			</div>
			{cart.length > 0 && (
				<div className="total">
					<h3 className="totalPrice">total = {total.toFixed(2)}</h3>
					<button onClick={showAlert}>Purchase</button>
				</div>
			)}
			<br />
		</div>
	);
}

export default Cart;
