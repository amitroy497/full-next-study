import Link from 'next/link';

const StudentListPage = () => {
	return (
		<>
			<h1>Student List</h1>
			<ul>
				<li>
					<Link href='/studentList/1'>AB</Link>
				</li>
				<li>
					<Link href='/studentList/2'>CD</Link>
				</li>
				<li>
					<Link href='/studentList/3'>EF</Link>
				</li>
				<li>
					<Link href='/studentList/4'>GH</Link>
				</li>
				<li>
					<Link href='/studentList/5'>IJ</Link>
				</li>
				<li>
					<Link href='/studentList/6'>KL</Link>
				</li>
				<li>
					<Link href='/studentList/7'>MN</Link>
				</li>
				<li>
					<Link href='/studentList/8'>OP</Link>
				</li>
				<li>
					<Link href='/studentList/9'>QR</Link>
				</li>
				<li>
					<Link href='/studentList/10'>ST</Link>
				</li>
				<li>
					<Link href='/studentList/11'>UV</Link>
				</li>
				<li>
					<Link href='/studentList/12'>WX</Link>
				</li>
				<li>
					<Link href='/studentList/13'>YZ</Link>
				</li>
			</ul>
		</>
	);
};

export default StudentListPage;
