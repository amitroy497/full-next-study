'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AboutStudentPage = () => {
	const router = useRouter();
	const handleNavigation: any = (path: string) => {
		router.push(path);
	};
	return (
		<>
			<h1>About Student Page</h1>
			<br />
			<br />
			<Link href='/about/aboutCollege'>Go To About College Page</Link>
			<br />
			<Link href='/about'>Go To About Page</Link>
			<br />
			<Link href='/login'>Go To Login Page</Link>
			<br />
			<Link href='/'>Go To Home Page</Link>
			<br />
			<br />
			<br />
			<button onClick={() => handleNavigation('/about/aboutCollege')}>
				Navigate To About College Page
			</button>
			<br />
			<button onClick={() => handleNavigation('/about')}>
				Navigate To About Page
			</button>
			<br />
			<button onClick={() => handleNavigation('/login')}>
				Navigate To Login Page
			</button>
			<br />
			<button onClick={() => handleNavigation('/')}>
				Navigate To Home Page
			</button>
		</>
	);
};

export default AboutStudentPage;
