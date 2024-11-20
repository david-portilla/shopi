import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartContextType } from "../../Context/types";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

function MyOrders() {
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const { orders } = context;
	return (
		<Layout>
			<h1 className="text-2xl font-bold mb-6">My Orders</h1>
			{orders.length > 0 ? (
				<ul className="flex flex-col overflow-auto">
					{orders.map((order) => (
						<li className="flex flex-col mb-6" key={order.orderId}>
							<h2 className="text-md font-bold">Order #{order.orderId}</h2>
							<p className="text-sm font-light mb-4">{order.date}</p>
							{order.products.map((item) => (
								<OrderCard key={item.id} data={item} orderId={order} />
							))}
							<p className="text-lg font-medium">Total: ${order.totalPrice}</p>
						</li>
					))}
				</ul>
			) : (
				<h2>No previous orders found</h2>
			)}
		</Layout>
	);
}

export default MyOrders;
