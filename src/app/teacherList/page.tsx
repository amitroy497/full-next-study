'use client';
import Link from 'next/link';

const TeacherListPage = () => {
	const listOfTeacher = [
		{
			id: 1,
			name: 'AB',
		},
		{
			id: 2,
			name: 'CD',
		},
		{
			id: 3,
			name: 'EF',
		},
		{
			id: 4,
			name: 'GH',
		},
		{
			id: 5,
			name: 'IJ',
		},
		{
			id: 6,
			name: 'KL',
		},
		{
			id: 7,
			name: 'MN',
		},
		{
			id: 8,
			name: 'OP',
		},
		{
			id: 9,
			name: 'QR',
		},
		{
			id: 10,
			name: 'ST',
		},
		{
			id: 11,
			name: 'UV',
		},
		{
			id: 12,
			name: 'WX',
		},
		{
			id: 13,
			name: 'YZ',
		},
	];
	return (
		<>
			<h1>Teacher List</h1>
			<ul>
				{listOfTeacher.map((list) => (
					<li key={list.id}>
						<Link href={`/teacherList/${list.name}`}>{list.name}</Link>
					</li>
				))}
			</ul>
			<br />
			<Link href='/'>Go To Home Page</Link>
		</>
	);
};

export default TeacherListPage;
