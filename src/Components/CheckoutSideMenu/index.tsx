import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { ShoppingCartContextType } from "../../Context/types";
import "./styles.css";

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const {
		isCheckoutSideMenuOpen,
		closeCheckoutSideMenu,
		cartProducts,
		order,
		setOrder,
		setCartProducts,
	} = context;

	const totalPrice = cartProducts.reduce(
		(acc, product) => acc + product.price * product.quantity,
		0
	);

	const handleCheckout = () => {
		console.log("checkout:", cartProducts);
		const orderToAdd = {
			orderId: uuidv4(),
			date: new Date().toLocaleDateString(),
			totalPrice,
			products: cartProducts,
		};
		setOrder([...order, orderToAdd]);
		closeCheckoutSideMenu();
		setCartProducts([]);
	};

	useEffect(() => {
		console.log("cartProducts:", cartProducts);
		console.log("order:", order);
	}, [order, cartProducts]);

	return (
		<aside
			className={`checkout-side-menu flex flex-col fixed right-0 bg-gray-100 ${
				isCheckoutSideMenuOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">My Order</h2>
				<button onClick={closeCheckoutSideMenu}>
					<XCircleIcon className="size-6 text-black" />
				</button>
			</div>
			<div className="flex-1 px-6 overflow-y-auto">
				{cartProducts.length === 0 ? (
					<p>No products in the cart</p>
				) : (
					cartProducts.map((product, index) => (
						<OrderCard key={index} data={product} />
					))
				)}
			</div>
			<div className="p-6">
				<div className="flex justify-between items-center mb-6">
					<p className="font-light text-lg">Total:</p>
					<span className="font-medium text-2xl">$ {totalPrice}</span>
				</div>
				<button
					onClick={handleCheckout}
					className="bg-black text-white w-full rounded-lg py-3"
				>
					Checkout
				</button>
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;
