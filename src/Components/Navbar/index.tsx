import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

const activeStyle = "underline underline-offset-4";

const Navbar = () => {
	const context = useContext(ShoppingCartContext);
	if (!context) {
		throw new Error('useShoppingCartContext must be used within a ShoppingCartProvider');
	}
	const { count } = context;

	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 p-4 w-full text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="font-bold text-2xl">
					<NavLink to="/">Shopi</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/clothes"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/electronics"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/furnitures"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/toys"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/others"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Others
					</NavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/60">david_portilla@hotmail.com</li>
				<li>
					<NavLink
						to="/my-orders"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/my-account"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My account
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/sign-in"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Sign In
					</NavLink>
				</li>
				<li className="flex items-center gap-2">
					<ShoppingBagIcon className="size-6 text-black" /> ({count})
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
