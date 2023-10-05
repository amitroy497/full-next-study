import { FC } from 'react';
import { fetchUserListWithId } from '../fetchUserList';
import Link from 'next/link';

interface CallNextApiIdPageProps {
	params: {
		id: number;
	};
}

const CallNextApiIdPage: FC<CallNextApiIdPageProps> = async ({ params }) => {
	const data = await fetchUserListWithId(params.id);
	return (
		<>
			<h1>CallNextApiIdPage</h1>
			{data.result.map((item: any) => (
				<div key={item.id}>
					<h2>Name: {item.name}</h2>
					<h2>Age: {item.age}</h2>
					<h2>Email: {item.email}</h2>
				</div>
			))}
			<br />
			<Link href='/callNextApi'>Back To Call Next Api Page</Link>
			<br />
			<br />
			<Link href='/'>Back To Home Page</Link>
		</>
	);
};

export default CallNextApiIdPage;
