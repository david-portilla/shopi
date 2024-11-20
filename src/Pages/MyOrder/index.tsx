import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartContextType } from "../../Context/types";
import OrderCard from "../../Components/OrderCard";

const MyOrder = () => {
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const { orders } = context;
	return (
		<Layout>
			<h1 className="text-2xl font-bold mb-6">My last order</h1>
			{orders.length > 0 ? (
				orders
					.slice(-1)[0]
					.products.map((item) => (
						<OrderCard
							key={item.id}
							data={item}
							orderId={orders.slice(-1)[0]}
						/>
					))
			) : (
				<h2>No recent order available</h2>
			)}
		</Layout>
	);
};

export default MyOrder;
