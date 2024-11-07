import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import "./styles.css";
import { ShoppingCartContext } from "../../Context";
import cleanImageUrl from "../../Utils";

const ProductDetail = () => {
	const { isProductDetailOpen, closeProductDetail, productToShow } =
		useContext(ShoppingCartContext);

	return (
		<aside
			className={`product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white ${
				isProductDetailOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">{productToShow.title}</h2>
				<button onClick={closeProductDetail}>
					<XCircleIcon className="size-6 text-black" />
				</button>
			</div>
			<figure className="p-6">
				<img
					className="w-full h-full rounded-lg"
					src={cleanImageUrl(productToShow.images?.[0])}
					alt={productToShow.title}
				/>
			</figure>
			<p className="flex flex-col p-6">
				<span className="font-medium text-2xl mb-2">{productToShow.price}</span>
				<span className="font-medium text-md">{productToShow.title}</span>
				<span className="font-light text-sm">{productToShow.description}</span>
			</p>
		</aside>
	);
};

export default ProductDetail;
