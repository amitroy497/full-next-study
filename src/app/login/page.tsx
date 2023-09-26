import Link from 'next/link';

const LoginPage = () => {
	return (
		<>
			<h1>Login Page</h1>
			<br />
			<Link href='/about'>Go To About Page</Link>
			<br />
			<br />
			<Link href='/'>Go To Home Page</Link>
		</>
	);
};

export default LoginPage;
