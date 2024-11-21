import { BrowserRouter, useRoutes } from "react-router-dom";
import { ShoppingCartProvider } from "../Context";
import Home from "../Pages/Home";
import MyAccount from "../Pages/MyAccount";
import MyOrder from "../Pages/MyOrder";
import MyOrders from "../Pages/MyOrders";
import NotFound from "../Pages/NotFound";
import Navbar from "../Components/Navbar";
import "./App.css";

const AppRoutes = () => {
	let routes = useRoutes([
		{
			path: "/",
			element: <Home />,
		},
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
