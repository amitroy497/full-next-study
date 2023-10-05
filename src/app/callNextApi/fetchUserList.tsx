export const fetchUserList = async () => {
	const data = await fetch('http://localhost:3000/api/apiRoutesWithStaticData');
	const res = await data.json();
	return res;
};

export const fetchUserListWithId = async (id: number) => {
	const data = await fetch(
		`http://localhost:3000/api/apiRoutesWithStaticData/${id}`
	);
	const res = await data.json();
	return res;
};
