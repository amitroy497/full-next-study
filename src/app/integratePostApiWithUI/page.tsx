'use client';
import { useState } from 'react';
import Link from 'next/link';
import custom from './custom.module.css';

const IntegratePostApiWithUIPage = () => {
	const [name, setName] = useState<string>('');
	const [age, setAge] = useState<number>();
	const [email, setEmail] = useState<string>('');

	const submitData = async () => {
		const data = await fetch(
			'http://localhost:3000/api/apiRoutesWithStaticData',
			{
				method: 'POST',
				body: JSON.stringify({
					name: name,
					age: age,
					email: email,
				}),
			}
		);
		const response = await data.json();
		if (response.success) {
			return alert('New Data Created');
		}
		return alert('Error, please try again');
	};
	return (
		<div className={custom.addDiv}>
			<h1 className={custom.h1Class}>ADD DATA</h1>
			<input
				className={custom.inputField}
				value={name}
				placeholder='Enter Name'
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				className={custom.inputField}
				value={age}
				placeholder='Enter Age'
				onChange={(e) => setAge(Number(e.target.value))}
			/>
			<input
				className={custom.inputField}
				value={email}
				placeholder='Enter Email'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button className={custom.btn} onClick={submitData}>
				Submit
			</button>
			<br />
			<br />
			<Link href='/'>Back To Home Page</Link>
		</div>
	);
};

export default IntegratePostApiWithUIPage;
