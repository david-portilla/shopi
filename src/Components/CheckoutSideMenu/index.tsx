import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import OrderItem from "../OrderItem";
import { ShoppingCartContextType } from "../../Context/types";
import "./styles.css";

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const {
		isCheckoutSideMenuOpen,
		closeCheckoutSideMenu,
		cartProducts,
		orders,
		setOrders,
		setCartProducts,
	} = context;

	const totalPrice = cartProducts.reduce(
		(acc, product) => acc + product.price * product.quantity,
		0
	);

	const handleCheckout = () => {
		const orderToAdd = {
			orderId: uuidv4(),
			date: new Date().toLocaleString(),
			totalPrice,
			products: cartProducts,
		};
		setOrders([...orders, orderToAdd]);
		closeCheckoutSideMenu();
		setCartProducts([]);
	};

	return (
		<aside
			className={`checkout-side-menu flex flex-col fixed right-0 bg-gray-100 ${
				isCheckoutSideMenuOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">My Cart</h2>
				<button onClick={closeCheckoutSideMenu}>
					<XCircleIcon className="size-6 text-black" />
				</button>
			</div>
			<div className="flex-1 px-6 overflow-y-auto">
				{cartProducts.length === 0 ? (
					<p>No products in the cart</p>
				) : (
					cartProducts.map((product, index) => (
						<OrderItem key={index} data={product} />
					))
				)}
			</div>
			<div className="p-6">
				<div className="flex justify-between items-center mb-6">
					<p className="font-light text-lg">Total:</p>
					<span className="font-medium text-2xl">$ {totalPrice}</span>
				</div>
				{cartProducts.length > 0 && (
					<Link to={"/my-orders/last"}>
						<button
							onClick={handleCheckout}
							className="bg-black text-white w-full rounded-lg py-3"
						>
							Checkout
						</button>
					</Link>
				)}
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;
