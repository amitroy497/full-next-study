import { FC } from 'react';

interface DeleteProductProps {
	id: string;
}
const DeleteProduct: FC<DeleteProductProps> = ({ id }) => {
	const deleteData = async () => {
		const data = await fetch(`http://localhost:3000/api/products/${id}`, {
			method: 'DELETE',
			body: JSON.stringify({
				_id: id,
			}),
		});
		const response = await data.json();
		if (response.success) {
			return alert('Data Deleted');
		}
		return alert('Error, please try again');
	};
	return <button onClick={deleteData}>Delete</button>;
};

export default DeleteProduct;
