'use client';
import { FC } from 'react';

interface StudentDetailPageProps {
	params: {
		student: string;
	};
}

const StudentDetailPage: FC<StudentDetailPageProps> = ({ params }) => {
	return (
		<>
			<h1>Student Detail</h1>
			<h1>Student ID :- {params.student}</h1>
		</>
	);
};

export default StudentDetailPage;
