import Link from 'next/link';

export const generateMetadata = () => {
	return {
		title: 'Generate MetaData Page',
		description: 'Generate MetaData Page Description',
		keywords: 'Generate MetaData Page Keywords',
	};
};

const GenerateMetaDataPage = () => {
	return (
		<>
			<h1>Generate MetaData Page</h1>
			<Link href='/'>Back To Home Page</Link>
		</>
	);
};

export default GenerateMetaDataPage;
