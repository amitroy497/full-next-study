'use client';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import custom from './custom.module.css';
import { fetchUserListWithId } from '../../fetchUserList';

interface IntegratePutApiWithUIPageProps {
	params: {
		id: number;
	};
}
const IntegratePutApiWithUIPage: FC<IntegratePutApiWithUIPageProps> = ({
	params,
}) => {
	const [name, setName] = useState<string>('');
	const [age, setAge] = useState<number>();
	const [email, setEmail] = useState<string>('');

	useEffect(() => {
		(async function () {
			const data = await fetchUserListWithId(params.id);
			setName(data.result[0].name);
			setAge(data.result[0].age);
			setEmail(data.result[0].email);
		})();
	}, [params.id]);

	const updateData = async () => {
		const data = await fetch(
			`http://localhost:3000/api/apiRoutesWithStaticData/${params.id}`,
			{
				method: 'PUT',
				body: JSON.stringify({
					name: name,
					age: age,
					email: email,
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
			<h1>Integrate Put Api With UI Page</h1>
			<br />
			<h2 className={custom.h1Class}>UPDATE DATA</h2>
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
			<button className={custom.btn} onClick={updateData}>
				Update
			</button>
			<br />
			<br />
			<Link href='/'>Back To Home Page</Link>
		</div>
	);
};

export default IntegratePutApiWithUIPage;
