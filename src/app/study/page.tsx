import Link from 'next/link';

const StudyPage = () => {
	return (
		<>
			<h1>Study Page</h1>
			<br />
			<Link href='/study/lecture'>Go To Lecture Page</Link>
			<br />
			<Link href='/'>Go To Home Page</Link>
		</>
	);
};

export default StudyPage;
