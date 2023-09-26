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
			<Link href='/about/aboutStudent'>Go To About Student Page</Link>
			<br />
			<br />
			<Link href='/about/aboutCollege'>Go To About College Page</Link>
			<br />
			<br />
			<br />
			<button onClick={() => router.push('/about')}>
				Navigate To About Page
			</button>
			<br />
			<button onClick={() => router.push('/')}>Navigate To Home Page</button>
			<br />
			<button onClick={() => router.push('/about/aboutStudent')}>
				Navigate To About Student Page
			</button>
			<br />
			<button onClick={() => router.push('/about/aboutCollege')}>
				Navigate To About College Page
			</button>
		</>
	);
};

export default LoginPage;
