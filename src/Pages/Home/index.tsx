import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { Product, ShoppingCartContextType } from "../../Context/types";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

const Home = () => {
	const context = useContext(ShoppingCartContext) as ShoppingCartContextType;
	const { items, loading, setSearchByTitle, searchByCategory } = context;

	const [searchInput, setSearchInput] = useState("");
	const location = useLocation();

	useEffect(() => {
		setSearchInput("");
		setSearchByTitle("");
	}, [location.pathname]);

	const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
		setSearchByTitle(e.target.value);
	};

	const renderProductList = () => {
		let productsToRender = items || [];

		if (searchByCategory) {
			productsToRender = productsToRender.filter((item: Product) =>
				item.category.name
					.toLowerCase()
					.includes(searchByCategory.toLowerCase())
			);
		}

		if (searchInput) {
			productsToRender = productsToRender.filter((item: Product) =>
				item.title.toLowerCase().includes(searchInput.toLowerCase())
			);
		}

		if (!productsToRender || productsToRender.length === 0) {
			return (
				<p>
					No products found
					{searchInput && (
						<>
							for <b>{searchInput}</b>
						</>
					)}
				</p>
			);
		}

		return productsToRender.map((item: Product) => (
			<Card key={item.id} data={item} />
		));
	};

	return (
		<>
			<Layout>
				<div className="flex items-center justify-center">
					<h1 className="text-2xl font-bold mb-6">All Products</h1>
				</div>
				<input
					type="text"
					value={searchInput}
					placeholder="Search a product"
					className="rounded-lg p-2 mb-6 w-80 border-2 border-gray-400 focus:outline-none"
					onChange={(e) => handleSearchInputChange(e)}
				/>
				<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
					{loading ? <p>Loading...</p> : renderProductList()}
				</div>
				<ProductDetail />
				<CheckoutSideMenu />
			</Layout>
		</>
	);
};

export default Home;
