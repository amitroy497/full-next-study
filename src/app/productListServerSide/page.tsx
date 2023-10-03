import DescriptionClientComponent from './descriptionClientComponent';
import { fetchProductList } from './fetchProductList';

const ProductListServerSidePage = async () => {
	const products = await fetchProductList();
	return (
		<>
			<h1>Product List Page</h1>
			<h2>Fetch Api Data In Server Side</h2>
			{products.map((product: any) => (
				<>
					<h3 key={product?.id}>
						id: {product?.id} Name: {product?.title} Price: {product?.price}
					</h3>
					<DescriptionClientComponent desc={product?.description} />
				</>
			))}
		</>
	);
};

export default ProductListServerSidePage;
