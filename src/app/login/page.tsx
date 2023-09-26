'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
	const router = useRouter();
	return (
		<>
			<h1>Login Page</h1>
			<br />
			<Link href='/about'>Go To About Page</Link>
			<br />
			<br />
			<Link href='/'>Go To Home Page</Link>
			<br />
			<br />
			<br />
			<button onClick={() => router.push('/about')}>
				Navigate To About Page
			</button>
			<br />
			<button onClick={() => router.push('/')}>Navigate To Home Page</button>
		</>
	);
};

export default LoginPage;
