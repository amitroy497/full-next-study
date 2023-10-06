'use client';
import { FC } from 'react';

interface IntegrateDeleteApiWithUIProps {
	id: string;
}
const IntegrateDeleteApiWithUI: FC<IntegrateDeleteApiWithUIProps> = ({
	id,
}) => {
	const deleteData = async () => {
		const data = await fetch(
			`http://localhost:3000/api/apiRoutesWithStaticData/${id}`,
			{
				method: 'DELETE',
				body: JSON.stringify({
					id: id,
				}),
			}
		);
		const response = await data.json();
		if (response.success) {
			return alert('Data Deleted');
		}
		return alert('Error, please try again');
	};
	return (
		<>
			<button onClick={deleteData}>Delete</button>
		</>
	);
};

export default IntegrateDeleteApiWithUI;
