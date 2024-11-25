import { createContext, useEffect, useState } from "react";
import { ShoppingCartContextType, Product, Order } from "./types";

export const ShoppingCartContext = createContext<
	ShoppingCartContextType | undefined
>(undefined);

export const ShoppingCartProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	const [productToShow, setProductToShow] = useState<Product>({} as Product);
	const [cartProducts, setCartProducts] = useState<Product[]>([]);

	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
	const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

	const [orders, setOrders] = useState<Order[]>([]);

	const URL = "https://api.escuelajs.co/api/v1/";
	const [items, setItems] = useState<Product[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [searchByTitle, setSearchByTitle] = useState<string>("");
	const [filteredItems, setFilteredItems] = useState<Product[] | null>(null);
	const [searchByCategory, setSearchByCategory] = useState<string>("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${URL}products?offset=0&limit=24`);
				const data = await response.json();
				setItems(data);
			} catch (e) {
				console.error(`Error fetching data: ${e}`);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [searchByCategory]);

	const filteredItemsByTitle = items?.filter((item) =>
		item.title.toLowerCase().includes(searchByTitle?.toLowerCase() || "")
	);

	const filteredItemsByCategory = items?.filter((item) =>
		item.category.name
			.toLowerCase()
			.includes(searchByCategory?.toLowerCase() || "")
	);

	useEffect(() => {
		if (searchByTitle) {
			setFilteredItems(filteredItemsByTitle || []);
		}
		if (searchByCategory) {
			setFilteredItems(filteredItemsByCategory || []);
		}
	}, [searchByTitle, searchByCategory]);

	return (
		<ShoppingCartContext.Provider
			value={{
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
				orders,
				setOrders,
				items,
				setItems,
				loading,
				searchByTitle,
				setSearchByTitle,
				filteredItems,
				setFilteredItems,
				searchByCategory,
				setSearchByCategory,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
