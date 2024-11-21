import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { Order, ShoppingCartContextType } from "../../Context/types";
import Layout from "../../Components/Layout";
import OrderItem from "../../Components/OrderItem";

const MyOrder = () => {
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const { orders } = context;
	const { orderId } = useParams();

	const currentOrder: Order | undefined = orderId
		? orders.find((o) => o.orderId === orderId)
		: orders[orders.length - 1];

	return (
		<Layout>
			<h1 className="text-2xl font-bold mb-6">My order</h1>
			{currentOrder ? (
				<div className="flex flex-col mb-6">
					<h2 className="text-md font-bold">Order #{currentOrder?.orderId}</h2>
					<p className="text-sm font-light mb-4">{currentOrder?.date}</p>
					{currentOrder?.products.map((item) => (
						<OrderItem
							key={item.id}
							data={item}
							orderId={currentOrder?.orderId}
						/>
					))}
					<p className="text-lg font-bold text-center">
						Total: ${currentOrder?.totalPrice}
					</p>
				</div>
			) : (
				<h2>No recent order available</h2>
			)}
		</Layout>
	);
};

export default MyOrder;
