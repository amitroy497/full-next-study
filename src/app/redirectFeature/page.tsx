import { redirect } from 'next/navigation';

const RedirectFeaturePage = () => {
	redirect('/');

	return (
		<>
			<h1>Redirect Feature Page</h1>
			<h2>
				This is page is under maintenance, redirecting it to home page ...
			</h2>
		</>
	);
};

export default RedirectFeaturePage;
