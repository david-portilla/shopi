import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { Order, ShoppingCartContextType } from "../../Context/types";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

const MyOrder = () => {
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const { orders } = context;
	const { orderId } = useParams();
	let currentOrder: Order | undefined;

	currentOrder = orderId
		? orders.find((o) => o.orderId === orderId)
		: orders[orders.length - 1];

	return (
		<Layout>
			<h1 className="text-2xl font-bold mb-6">My last order</h1>
			{orders.length > 0 ? (
				currentOrder?.products.map((item) => (
					<OrderCard
						key={item.id}
						data={item}
						orderId={currentOrder?.orderId}
					/>
				))
			) : (
				<h2>No recent order available</h2>
			)}
		</Layout>
	);
};

export default MyOrder;
