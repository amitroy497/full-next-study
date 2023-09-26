import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			Home Page
			<br />
			<br />
			<Link href='/login'>Go To Login Page</Link>
			<br />
			<br />
			<Link href='/about'>Go To About Page</Link>
		</main>
	);
}
