import { XCircleIcon } from "@heroicons/react/24/outline";
import "./styles.css";

const ProductDetail = () => {
	return (
		<aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
			<div className="flex justify-between items-center p-4">
				<h2 className="font-medium text-xl">ProductDetail</h2>
				<button>
					<XCircleIcon className="size-6 text-black" />
				</button>
			</div>
		</aside>
	);
};

export default ProductDetail;
