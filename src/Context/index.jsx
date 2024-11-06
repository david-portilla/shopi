import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export const ShoppingCartProvider = ({ children }) => {
	const [count, setCount] = useState(0);

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

ShoppingCartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
