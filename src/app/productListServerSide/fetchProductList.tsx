export const fetchProductList = async () => {
	const data = await fetch('https://dummyjson.com/products');
	const res = await data.json();
	return res?.products;
};
