import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export const ShoppingCartProvider = ({ children }) => {
	const [count, setCount] = useState(0);
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	const [productToShow, setProductToShow] = useState({});

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
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

ShoppingCartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
