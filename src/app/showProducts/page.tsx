'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ShowProducts = () => {
	const router = useRouter();
	const [products, setProducts] = useState([]);
	const fetchData = async () => {
		const data = await fetch('http://localhost:3000/api/products');
		const res = await data.json();
		setProducts(res?.result);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div style={{ textAlign: 'center', padding: 20 }}>
			<h1 style={{ fontWeight: 'bold' }}>Show Products Page</h1>
			<br />
			<br />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<table style={{ borderWidth: 1 }}>
					<thead>
						<tr>
							<th style={{ borderWidth: 1, padding: 5 }}>Name</th>
							<th style={{ borderWidth: 1, padding: 5 }}>Price</th>
							<th style={{ borderWidth: 1, padding: 5 }}>Company</th>
							<th style={{ borderWidth: 1, padding: 5 }}>Color</th>
							<th style={{ borderWidth: 1, padding: 5 }}>Category</th>
						</tr>
					</thead>
					<tbody>
						{products?.map((product: any, i) => (
							<tr key={i}>
								<td style={{ borderWidth: 1, padding: 5 }}>{product?.name}</td>
								<td style={{ borderWidth: 1, padding: 5 }}>{product?.price}</td>
								<td style={{ borderWidth: 1, padding: 5 }}>
									{product?.company}
								</td>
								<td style={{ borderWidth: 1, padding: 5 }}>{product?.color}</td>
								<td style={{ borderWidth: 1, padding: 5 }}>
									{product?.category}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<br />
			<br />
			<br />
			<Link href='/addProduct'>Go To Add Product Page</Link>
			<br />
			<br />
			<Link href='/'>Go To Home Page</Link>
			<br />
			<br />
			<br />
			<button onClick={() => router.push('/addProduct')}>
				Navigate To Add Product Page
			</button>
			<br />
			<br />
			<button onClick={() => router.push('/')}>Navigate To Home Page</button>
		</div>
	);
};

export default ShowProducts;
