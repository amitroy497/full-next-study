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
