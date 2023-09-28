import { FC } from 'react';
import Link from 'next/link';

interface LecturePageProps {
	params: {
		lecture: [];
	};
}
const LecturePage: FC<LecturePageProps> = ({ params }) => {
	return (
		<>
			<h1>Lecture Page</h1>
			{params.lecture.map((prop: any, i) => (
				<h2 key={i}>{prop}</h2>
			))}
			<br />
			<Link href={`/study/lecture/${Math.random()}`}>Any Random Page</Link>
			<br />
			<Link href='/study'>Go To Study Page</Link>
		</>
	);
};

export default LecturePage;
