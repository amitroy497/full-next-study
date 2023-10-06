import { NextResponse } from 'next/server';
import { dataList } from '../../util/db';

export function GET(request: any, content: any) {
	const data = dataList.filter((item) => item.id == content.params.id);
	return NextResponse.json(
		data.length === 0
			? { result: 'No Data Found', success: false }
			: { result: data, success: true },
		{ status: 200 }
	);
}

export const PUT = async (request: any, content: any) => {
	const payload = await request.json();
	payload.id = content.params.id;
	if (!payload.id || !payload.name || !payload.age || !payload.email) {
		return NextResponse.json(
			{ result: 'Invalid Data', success: false },
			{ status: 400 }
		);
	}
	return NextResponse.json({ result: payload, success: true }, { status: 200 });
};

export const DELETE = (req: any, content: any) => {
	const id = content.params.id;
	const arr = ['1', '2', '3', '4'];
	if (arr.includes(id)) {
		return NextResponse.json(
			{ result: 'Data Deleted', success: true },
			{ status: 200 }
		);
	}
	return NextResponse.json(
		{ result: 'Invalid Id', success: false },
		{ status: 400 }
	);
};
