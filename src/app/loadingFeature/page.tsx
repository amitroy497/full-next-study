import Link from 'next/link';
import { fetchUserList } from './fetchUserList';

const LoadingFeaturePage = async () => {
	const users = await fetchUserList();
	return (
		<>
			<h1>Loading Feature Page</h1>
			<Link href='/'>Back To Home Page</Link>
			{users.map((user: any) => (
				<>
					<h3 key={user?.id}>
						id: {user?.id} Name:{' '}
						{`${user?.firstName} ${user?.maidenName} ${user?.lastName}`}
					</h3>
				</>
			))}
		</>
	);
};

export default LoadingFeaturePage;
