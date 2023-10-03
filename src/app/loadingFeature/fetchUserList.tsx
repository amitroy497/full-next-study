export const fetchUserList = async () => {
	const data = await fetch('https://dummyjson.com/users');
	const res = await data.json();
	return res?.users;
};
