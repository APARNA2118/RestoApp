import React, {useState,useEffect} from "react";
import "../src/style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";

const products = [
	{
		id: 1,
		name: "Batura",
		rating: 4.3,
		description:
			"Batura & curry",
		price: 199,
		image: require("./assets/images/product-1.jpg"),
	},
	{
		id: 2,
		name: "Chapati",
		rating: 4.2,
		description:
			"Chapati & curry",
		price: 229,
		image: require("./assets/images/product-2.jpg"),
	},
	{
		id: 3,
		name: "Dosa",
		rating: 3.2,
		description:
			"Dosa & curry",
		price: 99,
		image: require("./assets/images/product-3.jpg"),
	},
	{
		id: 4,
		name: "Croffle",
		rating: 4.8,
		description:
			"Croffle is a Spanish dish",
		price: 119,
		image: require("./assets/images/product-4.jpg"),
	},
	{
		id: 5,
		name: "Tofu Balls",
		rating: 4.5,
		description:
			"Tofu ball is a  vegan food.",
		price: 85,
		image: require("./assets/images/product-5.jpg"),
	},
	{
		id: 6,
		name: "Fried Chicken",
		rating: 3.8,
		description:"Fried chicken wings and legs",
		price: 149,
		image: require("./assets/images/product-6.jpg"),
	},
];

function AppCart() {
	
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);

	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<br /><br /><br />
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
				<h3 className="logo">Choose your favorite meals</h3>
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				<h2 className="title">
					MENU
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								{/* <button className="btn">
									Detail
								</button> */}
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default AppCart;
