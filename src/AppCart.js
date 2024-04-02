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
		price: 12,
		image: require("./assets/images/product-1.jpg"),
	},
	{
		id: 2,
		name: "Chapati",
		rating: 4.2,
		description:
			"Chapati & curry",
		price: 10,
		image: require("./assets/images/product-2.jpg"),
	},
	// {
	// 	id: 3,
	// 	name: "Dosa",
	// 	rating: 3.2,
	// 	description:
	// 		"Dosa & curry",
	// 	price: 99,
	// 	image: require("./assets/images/product-3.jpg"),
	// },
	{
		id: 4,
		name: "Croffle",
		rating: 4.8,
		description:
			"Buttery sweet crispy croissant waffles",
		price: 100,
		image: require("./assets/images/product-4.jpg"),
	},
	{
		id: 5,
		name: "Tofu Balls",
		rating: 4.5,
		description:
			"Potato-filled balls",
		price: 85,
		image: require("./assets/images/product-5.jpg"),
	},
	{
		id: 6,
		name: "Fried Chicken",
		rating: 3.8,
		description:"Fried chicken wings and legs",
		price: 140,
		image: require("./assets/images/product-6.jpg"),
	},
	{
		id: 7,
		name: "French Fries",
		rating: 4.7,
		description:"French fries with tomato sauce & mayonnaise ",
		price: 90,
		image: require("./assets/images/french-fries.jpg"),
	},
	{
		id: 8,
		name: "Sushi",
		rating: 4.3,
		description:"A Japanese dish with raw fish",
		price: 140,
		image: require("./assets/images/sushi.jpg"),
	},
	{
		id: 8,
		name: "Chicken Croquettes",
		rating: 4.5,
		description:"Chicken-filled balls",
		price: 120,
		image: require("./assets/images/chicken-croquettes.jpg"),
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
