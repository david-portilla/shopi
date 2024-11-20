import { useContext } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import { Order, Product, ShoppingCartContextType } from "../../Context/types";
import cleanImageUrl from "../../Utils";
import "./index.css";

const OrderCard = ({
	data,
	orderId = undefined,
}: {
	data: Product;
	orderId?: Order;
}) => {
	const { id, title, price, images, quantity } = data;
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const { cartProducts, setCartProducts } = context;
	const checkProductInCart = cartProducts.find((item) => item.id === id);

	const updateCartProductQuantity = (productId: string, change: number) => {
		const updatedCart = cartProducts.map((item) =>
			item.id === productId
				? { ...item, quantity: item.quantity + change }
				: item
		);
		setCartProducts(updatedCart.filter((item) => item.quantity > 0));
	};

	const handleAddProduct = () => {
		if (checkProductInCart) {
			updateCartProductQuantity(id, 1);
		} else {
			setCartProducts([...cartProducts, { ...data, quantity: 1 }]);
		}
	};

	const handleDeleteProduct = () => {
		if (checkProductInCart && checkProductInCart.quantity > 0) {
			updateCartProductQuantity(id, -1);
		}
	};

	return (
		<div className="flex justify-between items-center py-2">
			<div className="flex items-center gap-2">
				<figure className="w-20 h-20 relative">
					{orderId && <p className="order-card-quantity">{quantity}</p>}
					<img
						className="w-full h-full rounded-lg object-contain"
						src={cleanImageUrl(images?.[0])}
						alt={title}
					/>
				</figure>
				<p className="text-sm font-light max-w-[150px]">{title}</p>
			</div>
			<div className="flex items-center gap-2">
				<p className="text-lg font-medium">${price * quantity}</p>
				{!orderId && (
					<>
						<button onClick={handleAddProduct}>
							<PlusIcon className="size-6 text-black" />
						</button>
						<p className="text-lg font-medium">[{quantity}]</p>
						<button onClick={handleDeleteProduct}>
							<MinusIcon className="size-6 text-black" />
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default OrderCard;
