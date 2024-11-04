import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";

function Home() {
	const URL = "https://api.escuelajs.co/api/v1/";
	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${URL}products?offset=0&limit=5`);
				const data = await response.json();
				setItems(data);
			} catch (e) {
				console.error(`Oh no, ocurrió un error: ${e}`);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<Layout>
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{loading ? (
					<p>Loading...</p>
				) : (
					items?.map((item) => <Card key={item.id} data={item} />)
				)}
			</div>
		</Layout>
	);
}

export default Home;
