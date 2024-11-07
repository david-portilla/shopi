import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export const ShoppingCartProvider = ({ children }) => {
	const [count, setCount] = useState(0);
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	const [productToShow, setProductToShow] = useState({});
	const [cartProducts, setCartProducts] = useState([]);

	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
	const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				productToShow,
				setProductToShow,
				cartProducts,
				setCartProducts,
				isCheckoutSideMenuOpen,
				openCheckoutSideMenu,
				closeCheckoutSideMenu,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

ShoppingCartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
