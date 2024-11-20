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
