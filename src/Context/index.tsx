import { createContext, useState } from "react";
import { ShoppingCartContextType, Product } from "./types";

export const ShoppingCartContext = createContext<
	ShoppingCartContextType | undefined
>(undefined);

export const ShoppingCartProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [productsCount, setProductsCount] = useState(0);
	const [itemsCount, setItemsCount] = useState(0);
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	const [productToShow, setProductToShow] = useState<Product>({} as Product);
	const [cartProducts, setCartProducts] = useState<Product[]>([]);

	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
	const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

	return (
		<ShoppingCartContext.Provider
			value={{
				productsCount,
				setProductsCount,
				itemsCount,
				setItemsCount,
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
