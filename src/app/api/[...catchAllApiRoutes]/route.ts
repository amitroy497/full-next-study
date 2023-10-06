import { NextResponse } from 'next/server';

export const GET = async (request: any, content: any) => {
	const data = content.params.catchAllApiRoutes;
	return NextResponse.json({ resutlt: data }, { status: 200 });
};
