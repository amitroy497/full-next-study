import { NextResponse } from 'next/server';
import { dataList } from '../util/db';

export function GET() {
	const data = dataList;
	return NextResponse.json(data, { status: 200 });
}

export const POST = async (req: any) => {
	const payload = await req.json();
	if (!payload.name || !payload.age || !payload.email) {
		return NextResponse.json(
			{ result: 'Please fill all fields', success: false },
			{ status: 400 }
		);
	}
	return NextResponse.json(
		{ result: 'New Data Added', success: true },
		{ status: 201 }
	);
};
