import { BrowserRouter, useRoutes } from "react-router-dom";
import { ShoppingCartContext, ShoppingCartProvider } from "../Context";
import Home from "../Pages/Home";
import MyAccount from "../Pages/MyAccount";
import MyOrder from "../Pages/MyOrder";
import MyOrders from "../Pages/MyOrders";
import NotFound from "../Pages/NotFound";
import Navbar from "../Components/Navbar";
import "./App.css";
import { ShoppingCartContextType } from "../Context/types";
import { useContext } from "react";

const AppRoutes = () => {
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const { items } = context;

	const categories = items
		? Array.from(new Set(items.map((item) => item.category.name)))
		: [];

	const categoryRoutes = categories.map((category) => ({
		path: `/${category.toLowerCase().replace(/\s+/g, "-")}`,
		element: <Home />,
	}));
	let routes = useRoutes([
		{
			path: "/",
			element: <Home />,
		},
		...categoryRoutes,
		{
			path: "/my-order",
			element: <MyOrder />,
		},
		{
			path: "/my-account",
			element: <MyAccount />,
		},
		{
			path: "/my-orders",
			element: <MyOrders />,
		},
		{
			path: "/my-orders/last",
			element: <MyOrder />,
		},
		{
			path: "/my-orders/:orderId",
			element: <MyOrder />,
		},
		{
			path: "/*",
			element: <NotFound />,
		},
	]);

	return routes;
};

const App = () => {
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<AppRoutes />
				<Navbar />
			</BrowserRouter>
		</ShoppingCartProvider>
	);
};

export default App;
