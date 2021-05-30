import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Items from "./Components/Items/Items";
import NavBar from "./Components/NavBar/NavBar";
import Showcase from "./Components/Showcase/Showcase";
import data from "./Data";

function App() {
	const { products } = data;

	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		const exist = cart.find((x) => x.id === product.id);
		if (exist) {
			setCart(
				cart.map((item) => {
					return item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item;
				})
			);
		} else {
			setCart([...cart, { ...product, qty: 1 }]);
		}
	};

	const reduceItem = (product) => {
		const exist = cart.find((x) => x.id === product.id);
		if (exist) {
			if (product.qty === 1) {
				setCart(
					cart.filter((item) => {
						return item.id !== product.id;
					})
				);
			} else {
				setCart(
					cart.map((item) => {
						return item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item;
					})
				);
			}
		}
	};

	return (
		<>
			<NavBar />
			<Showcase />
			<div className="container">
				<div className="row">
					<Items className="col-2" products={products} onAdd={addToCart} />
					<Cart className="col-1" cart={cart} onAdd={addToCart} onReduce={reduceItem} />
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div id="targetElement"></div>
		</>
	);
}

export default App;
