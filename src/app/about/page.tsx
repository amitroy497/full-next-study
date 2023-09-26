import Link from 'next/link';

const AboutPage = () => {
	return (
		<>
			<h1>About Page</h1>
			<br />
			<Link href='/login'>Go To Login Page</Link>
			<br />
			<br />
			<Link href='/'>Go To Home Page</Link>
		</>
	);
};

export default AboutPage;
