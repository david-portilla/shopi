import { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import cleanImageUrl from "../../Utils";
import { Product, ShoppingCartContextType } from "../../Context/types";
import "./styles.css";

const Card = ({ data }: { data: Product }) => {
	const {
		title,
		price,
		images,
		category: { name },
	} = data;

	const {
		openProductDetail,
		setProductToShow,
		cartProducts,
		setCartProducts,
		openCheckoutSideMenu,
		closeProductDetail,
		closeCheckoutSideMenu,
	} = useContext(ShoppingCartContext) as ShoppingCartContextType;

	const handleShowProductDetail = (product: Product) => {
		openProductDetail();
		closeCheckoutSideMenu();
		setProductToShow(product);
	};

	const handleAddToCart = (
		product: Product,
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		e.stopPropagation();
		openCheckoutSideMenu();
		closeProductDetail();

		const checkProductInCart = cartProducts.find(
			(item) => item.id === product.id
		);

		if (checkProductInCart) {
			setCartProducts(
				cartProducts.map((item) =>
					item.id === product.id
						? { ...item, quantity: (item.quantity += 1) }
						: item
				)
			);
		} else {
			setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
		}
	};

	return (
		<div
			className="card bg-white cursor-pointer w-56 h-60 rounded-lg"
			onClick={() => handleShowProductDetail(data)}
		>
			<figure className="card-image relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{name}
				</span>
				<img
					className="w-full h-full object-cover rounded-lg"
					src={cleanImageUrl(images?.[0])}
					alt={title}
					referrerPolicy="no-referrer"
				/>
				<button
					className="btn-add-to-cart absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
					onClick={(e) => handleAddToCart(data, e)}
				>
					<PlusIcon className="size-6 text-black" />
				</button>
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light">{title}</span>
				<span className="text-lg font-medium">${price}</span>
			</p>
		</div>
	);
};

export default Card;
