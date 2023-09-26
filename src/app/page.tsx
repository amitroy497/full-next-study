'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			Home Page
			<br />
			<br />
			<Link href='/login'>Go To Login Page</Link>
			<br />
			<br />
			<Link href='/about'>Go To About Page</Link>
			<br />
			<br />
			<br />
			<button onClick={() => router.push('/login')}>
				Navigate To Login Page
			</button>
			<br />
			<button onClick={() => router.push('/about')}>
				Navigate To About Page
			</button>
		</main>
	);
}
