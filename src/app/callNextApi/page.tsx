import Link from 'next/link';
import IntegrateDeleteApiWithUI from './IntegrateDeleteApiWithUI';
import { fetchUserList } from './fetchUserList';

const CallNextApiPage = async () => {
	const data = await fetchUserList();
	return (
		<>
			<h1>Call Next.js Api Page</h1>
			<ul>
				{data.map((item: any) => (
					<li key={item.id}>
						<Link href={`callNextApi/${item.id}`}>{item.name}</Link>
						<span> </span>
						<Link href={`callNextApi/${item.id}/integratePutApiWithUI`}>
							Edit
						</Link>
						<span> </span>
						<IntegrateDeleteApiWithUI id={item.id} />
					</li>
				))}
			</ul>
			<br />
			<Link href='/'>Back To Home Page</Link>
		</>
	);
};

export default CallNextApiPage;
