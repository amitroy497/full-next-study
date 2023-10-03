import Link from 'next/link';
import Script from 'next/script';

const ScriptComponentPage = () => {
	return (
		<>
			<Script src='/geoLocation.js' />
			<h1>Script Component Page</h1>
			<div id='location' />
			<Link href='/'>Back To Home Page</Link>
		</>
	);
};

export default ScriptComponentPage;
