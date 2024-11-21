import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartContextType } from "../../Context/types";
import Layout from "../../Components/Layout";
import OrderItem from "../../Components/OrderItem";
import { Link } from "react-router-dom";

const MyOrders = () => {
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const { orders } = context;
	const ordersSorted = orders.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
	return (
		<Layout>
			<h1 className="text-2xl font-bold mb-6">My Orders</h1>
			{ordersSorted.length > 0 ? (
				<ul className="flex flex-col overflow-auto">
					{ordersSorted.map((order) => (
						<Link
							to={`/my-orders/${order.orderId}`}
							key={order.orderId}
							className="text-sm font-light mb-4"
						>
							<li className="flex flex-col mb-6">
								<h2 className="text-md font-bold mb-4">
									Order #{order.orderId}
								</h2>
								{order.products.map((item) => (
									<OrderItem
										key={item.id}
										data={item}
										orderId={order.orderId}
									/>
								))}
								<p className="text-lg font-bold text-center">
									Total: ${order.totalPrice}
								</p>
							</li>
						</Link>
					))}
				</ul>
			) : (
				<h2>No previous orders found</h2>
			)}
		</Layout>
	);
};

export default MyOrders;
