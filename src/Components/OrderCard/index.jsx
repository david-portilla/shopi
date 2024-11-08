import PropTypes from "prop-types";
import { XCircleIcon } from "@heroicons/react/24/outline";
import cleanImageUrl from "../../Utils";

const OrderCard = ({ data }) => {
	const { title, price, images } = data;
	return (
		<div className="flex justify-between items-center py-2">
			<div className="flex items-center gap-2">
				<figure className="w-20 h-20">
					<img
						className="w-full h-full rounded-lg object-contain"
						src={cleanImageUrl(images?.[0])}
						alt={title}
					/>
				</figure>
				<p className="text-sm font-light max-w-[150px]">{title}</p>
			</div>
			<div className="flex items-center gap-2">
				<p className="text-lg font-medium">{price}</p>
				<button onClick={() => {}}>
					<XCircleIcon className="size-6 text-black" />
				</button>
			</div>
		</div>
	);
};

OrderCard.propTypes = {
	data: PropTypes.object,
};

export default OrderCard;
