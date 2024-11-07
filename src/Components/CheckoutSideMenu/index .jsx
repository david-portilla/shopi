import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";

const CheckoutSideMenu = () => {
	const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
		useContext(ShoppingCartContext);

	return (
		<aside
			className={`checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white ${
				isCheckoutSideMenuOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">My cart</h2>
				<button onClick={closeCheckoutSideMenu}>
					<XCircleIcon className="size-6 text-black" />
				</button>
			</div>
			<h3 className="font-bold text-xl">My cart</h3>
			{Object.keys(cartProducts).map((key) => (
				<div key={key}>{cartProducts[key].title}</div>
			))}
		</aside>
	);
};

export default CheckoutSideMenu;
