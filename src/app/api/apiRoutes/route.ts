import { NextResponse } from 'next/server';

export function GET() {
	return NextResponse.json(
		{ name: 'Amit', age: 30, city: 'Kolkata' },
		{ status: 200 }
	);
}
