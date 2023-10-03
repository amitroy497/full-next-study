'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ProductListPage = () => {
	const [products, setProducts] = useState([]);
	const fetchData = async () => {
		const data = await fetch('https://dummyjson.com/products');
		const res = await data.json();
		setProducts(res?.products);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<h1>Product List Page</h1>
			<Link href='/'>Back To Home Page</Link>
			{products.map((product: any) => (
				<h3 key={product?.id}>
					id: {product?.id} Name: {product?.title} Price: {product?.price}
				</h3>
			))}
		</>
	);
};

export default ProductListPage;
