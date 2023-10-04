import { NextResponse } from 'next/server';
import { dataList } from '../util/db';

export function GET() {
	const data = dataList;
	return NextResponse.json(data, { status: 200 });
}
