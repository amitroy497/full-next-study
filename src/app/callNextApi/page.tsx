import { fetchUserList } from './fetchUserList';
import Link from 'next/link';

const CallNextApiPage = async () => {
	const data = await fetchUserList();
	return (
		<>
			<h1>Call Next.js Api Page</h1>
			<ul>
				{data.map((item: any) => (
					<li key={item.id}>
						<Link href={`callNextApi/${item.id}`}>{item.name}</Link>
						<Link href={`callNextApi/${item.id}/integratePutApiWithUI`}>
							Edit
						</Link>
					</li>
				))}
			</ul>
			<br />
			<Link href='/'>Back To Home Page</Link>
		</>
	);
};

export default CallNextApiPage;
