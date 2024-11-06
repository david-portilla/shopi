import PropTypes from "prop-types";
import { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

const Card = ({ data }) => {
	const {
		title,
		price,
		images,
		category: { name },
	} = data;

	const cleanImageUrl = (url) => {
		return url?.replace(/[[\]"]/g, "").replace(/&quot;/g, "");
	};

	const { count, setCount } = useContext(ShoppingCartContext);

	return (
		<div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{name}
				</span>
				<img
					className="w-full h-full object-cover rounded-lg"
					src={cleanImageUrl(images?.[0])}
					alt={title}
					referrerPolicy="no-referrer"
				/>
				<div
					className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
					onClick={() => setCount(count + 1)}
				>
					<button>
						<PlusIcon className="size-6 text-black" />
					</button>
				</div>
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light">{title}</span>
				<span className="text-lg font-medium">${price}</span>
			</p>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		images: PropTypes.arrayOf(PropTypes.string),
		category: PropTypes.shape({
			name: PropTypes.string,
		}),
	}).isRequired,
};

export default Card;