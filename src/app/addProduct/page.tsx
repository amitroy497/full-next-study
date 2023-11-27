'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import custom from './custom.module.css';
import { useState } from 'react';

const AddProduct = () => {
	const router = useRouter();
	const [productName, setProductName] = useState<string>('');
	const [productPrice, setProductPrice] = useState<string>('');
	const [productCompany, setProductCompany] = useState<string>('');
	const [productColor, setProductColor] = useState<string>('');
	const [productCategory, setProductCategory] = useState<string>('');

	const addProduct = async () => {
		const data = await fetch('http://localhost:3000/api/products', {
			method: 'POST',
			body: JSON.stringify({
				name: productName,
				price: productPrice,
				company: productCompany,
				color: productColor,
				category: productCategory,
			}),
		});
		const response = await data.json();
		if (response.success) {
			alert('New Product Added Successfully');
			router.push('/showProducts');
		}
		return alert('Error, please try again');
	};

	return (
		<div className={custom.addDiv}>
			<h1 className={custom.h1Class}>Add Product Page</h1>
			<input
				type='text'
				className={custom.inputField}
				value={productName}
				placeholder='Enter Product Name'
				onChange={(e) => setProductName(e.target.value)}
			/>
			<input
				type='text'
				className={custom.inputField}
				value={productPrice}
				placeholder='Enter Price of the Product'
				onChange={(e) => setProductPrice(e.target.value)}
			/>
			<input
				type='text'
				className={custom.inputField}
				value={productCompany}
				placeholder='Enter Company Name'
				onChange={(e) => setProductCompany(e.target.value)}
			/>
			<input
				type='text'
				className={custom.inputField}
				value={productColor}
				placeholder='Enter Color'
				onChange={(e) => setProductColor(e.target.value)}
			/>
			<input
				type='text'
				className={custom.inputField}
				value={productCategory}
				placeholder='Enter Product Type'
				onChange={(e) => setProductCategory(e.target.value)}
			/>
			<button className={custom.btn} onClick={addProduct}>
				Add Product
			</button>
			<br />
			<br />
			<br />
			<br />
			<Link href='/'>Go To Home Page</Link>
			<br />
			<br />
			<br />
			<button onClick={() => router.push('/')}>Navigate To Home Page</button>
		</div>
	);
};

export default AddProduct;
