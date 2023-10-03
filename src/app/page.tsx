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
			<Link href='/about/aboutStudent'>Go To About Student Page</Link>
			<br />
			<br />
			<Link href='/about/aboutCollege'>Go To About College Page</Link>
			<br />
			<br />
			<Link href='/studentList'>Go To Student List Page</Link>
			<br />
			<br />
			<Link href='/teacherList'>Go To Teacher List Page</Link>
			<br />
			<br />
			<Link href='/study'>Go To Study Page</Link>
			<br />
			<br />
			<Link href='/productListClientSide'>
				Go To Product List Client Side Page
			</Link>
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
			<br />
			<button onClick={() => router.push('/about/aboutStudent')}>
				Navigate To About Student Page
			</button>
			<br />
			<button onClick={() => router.push('/about/aboutCollege')}>
				Navigate To About College Page
			</button>
			<br />
			<button onClick={() => router.push('/studentList')}>
				Navigate To Student List Page
			</button>
			<br />
			<button onClick={() => router.push('/teacherList')}>
				Navigate To Teacher List Page
			</button>
			<br />
			<button onClick={() => router.push('/productListClientSide')}>
				Navigate To Product List Client Side Page
			</button>
		</main>
	);
}
