'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
	const router = useRouter();
	return (
		<>
			<h1>About Page</h1>
			<br />
			<Link href='/login'>Go To Login Page</Link>
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
			<button onClick={() => router.push('/login')}>
				Navigate To Login Page
			</button>
			<br />
			<button onClick={() => router.push('/')}>Navigagte To Home Page</button>
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

export default AboutPage;
