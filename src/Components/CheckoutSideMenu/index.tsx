import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { ShoppingCartContextType } from "../../Context/types";
import "./styles.css";

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
		context;

	return (
		<aside
			className={`checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white ${
				isCheckoutSideMenuOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">My Order</h2>
				<button onClick={closeCheckoutSideMenu}>
					<XCircleIcon className="size-6 text-black" />
				</button>
			</div>
			<div className="flex-1 px-6 overflow-y-scroll">
				{cartProducts.length === 0 ? (
					<p>No products in the cart</p>
				) : (
					cartProducts.map((product, index) => (
						<OrderCard key={index} data={product} />
					))
				)}
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;
