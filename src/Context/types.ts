export interface ShoppingCartContextType {
	isProductDetailOpen: boolean;
	openProductDetail: () => void;
	closeProductDetail: () => void;
	productToShow: Product;
	setProductToShow: (product: Product) => void;
	cartProducts: Product[];
	setCartProducts: (products: Product[]) => void;
	isCheckoutSideMenuOpen: boolean;
	openCheckoutSideMenu: () => void;
	closeCheckoutSideMenu: () => void;
	orders: Order[];
	setOrders: (order: Order[]) => void;
	items: Product[] | null;
	setItems: (items: Product[] | null) => void;
	loading: boolean;
	searchByTitle: string;
	setSearchByTitle: (title: string) => void;
	filteredItems: Product[] | null;
	setFilteredItems: (items: Product[] | null) => void;
	searchByCategory: string;
	setSearchByCategory: (category: string) => void;
}

export interface Product {
	id: string;
	title: string;
	price: number;
	images: string[];
	category: { name: string };
	description: string;
	quantity: number;
}

export interface Order {
	orderId: string;
	date: string;
	totalPrice: number;
	products: Product[];
}
