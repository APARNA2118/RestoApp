<<<<<<< HEAD
import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/CartAdd';
import Cart from './components/Cart';
import './styles/CartAdd.css';

const AppCart = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
	<React.Fragment>
		<Navbar size={cart.length} setShow={setShow} />
		{
			show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
	</React.Fragment>
  )
}

export default AppCart
=======
import React, {
	useState,
	useEffect,
} from "react";
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
			<br /><br /><br /><br />
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
					Products
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
								<button className="btn">
									Detail
								</button>
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
>>>>>>> 4b7c3c9 (new changes)
