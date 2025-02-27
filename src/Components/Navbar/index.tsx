import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartContextType, Product } from "../../Context/types";

const activeStyle = "underline underline-offset-4";

const Navbar = () => {
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const {
		items,
		cartProducts,
		isCheckoutSideMenuOpen,
		openCheckoutSideMenu,
		closeCheckoutSideMenu,
		setSearchByCategory,
	} = context;
	const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		if (items) {
			const uniqueCategories = Array.from(
				new Set(items.map((item: Product) => item.category.name))
			);
			setCategories(uniqueCategories);
		}
	}, [items]);

	const toggleCheckoutSideMenu = () => {
		isCheckoutSideMenuOpen ? closeCheckoutSideMenu() : openCheckoutSideMenu();
	};

	return (
		<nav className="flex bg-white justify-between items-center fixed z-10 top-0 p-4 w-full text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="font-bold text-2xl">
					<NavLink to="/" onClick={() => setSearchByCategory("")}>
						Shopi
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						onClick={() => setSearchByCategory("")}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						All
					</NavLink>
				</li>

				{categories.map((category) => (
					<li key={category}>
						<NavLink
							to={`/${category.toLowerCase()}`}
							onClick={() => setSearchByCategory(category)}
							className={({ isActive }) =>
								`capitalize ${isActive ? activeStyle : ""}`
							}
						>
							{category}
						</NavLink>
					</li>
				))}
			</ul>
			<ul className="flex items-center gap-3">
				<li>
					<span className="text-black/60">by: </span>
					<a
						href="https://davidportilla.com/"
						target="_blank"
						className="text-black font-bold"
						rel="noopener noreferrer"
					>
						David Portilla
					</a>
				</li>
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
				<li className="flex items-center justify-center gap-2">
					<ShoppingBagIcon
						onClick={toggleCheckoutSideMenu}
						className="size-6 text-black cursor-pointer"
					/>
					{cartProducts.length}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
