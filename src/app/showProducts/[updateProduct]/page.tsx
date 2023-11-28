'use client';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import custom from './custom.module.css';

interface UpdateProductPageProps {
	params: {
		updateProduct: string;
	};
}

const UpdateProductPage: FC<UpdateProductPageProps> = ({ params }) => {
	const router = useRouter();
	const [productName, setProductName] = useState<string>('');
	const [productPrice, setProductPrice] = useState<string>('');
	const [productCompany, setProductCompany] = useState<string>('');
	const [productColor, setProductColor] = useState<string>('');
	const [productCategory, setProductCategory] = useState<string>('');

	useEffect(() => {
		(async function () {
			const data = await fetch(
				`http://localhost:3000/api/products/${params.updateProduct}`
			);
			const productData = await data.json();
			setProductName(productData?.result?.name);
			setProductPrice(productData?.result?.price);
			setProductCompany(productData?.result?.company);
			setProductColor(productData?.result?.color);
			setProductCategory(productData?.result?.category);
		})();
	}, [params.updateProduct]);

	const updateProductDetails = async () => {
		const data = await fetch(
			`http://localhost:3000/api/products/${params.updateProduct}`,
			{
				method: 'PUT',
				body: JSON.stringify({
					name: productName,
					price: productPrice,
					company: productCompany,
					category: productCategory,
					color: productColor,
				}),
			}
		);
		const response = await data.json();
		if (response.success) {
			return alert('Data Updated');
		}
		return alert('Error, please try again');
	};

	return (
		<div className={custom.addDiv}>
			<h1 className={custom.h1Class}>Update Product Page</h1>
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
			<button className={custom.btn} onClick={updateProductDetails}>
				Update Product
			</button>
			<br />
			<br />
			<Link href='/'>Go To Home Page</Link>
			<br />
			<br />
			<Link href='/showProducts'>Go To Show Products Page</Link>
			<br />
			<br />
			<br />
			<button onClick={() => router.push('/')}>Navigate To Home Page</button>
			<br />
			<br />
			<button onClick={() => router.push('/showProducts')}>
				Navigate To Show Products Page
			</button>
		</div>
	);
};

export default UpdateProductPage;
