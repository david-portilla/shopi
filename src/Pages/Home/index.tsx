import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { Product } from "../../Context/types";

function Home() {
	const URL = "https://api.escuelajs.co/api/v1/";
	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState<Product[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${URL}products?offset=0&limit=12`);
				const data = await response.json();
				setItems(data);
			} catch (e) {
				console.error(`Error fetching data: ${e}`);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Layout>
				<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
					{loading ? (
						<p>Loading...</p>
					) : (
						items?.map((item: Product) => <Card key={item.id} data={item} />)
					)}
				</div>
				<ProductDetail />
				<CheckoutSideMenu />
			</Layout>
		</>
	);
}

export default Home;
