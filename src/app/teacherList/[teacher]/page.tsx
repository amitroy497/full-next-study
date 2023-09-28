'use client';
import { FC } from 'react';
import Link from 'next/link';

interface StudentDetailPageProps {
	params: {
		teacher: string;
	};
}

const TeacherDetailPage: FC<StudentDetailPageProps> = ({ params }) => {
	return (
		<>
			<h1>Teacher Detail</h1>
			<h1>Teacher ID :- {params.teacher}</h1>
			<br />
			<Link href='/teacherList'>Go Back To Teacher List Page</Link>
			<br />
			<Link href='/'>Go To Home Page</Link>
		</>
	);
};

export default TeacherDetailPage;
