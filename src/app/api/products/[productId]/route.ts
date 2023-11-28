import { connectionSrt } from '@/db';
import { Product } from '@/lib/model/product';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export const PUT = async (request: Request, content: any) => {
	const productId = content?.params?.productId;
	const filter = { _id: productId };
	const payload = await request.json();
	await mongoose.connect(connectionSrt);
	const result = await Product.findOneAndUpdate(filter, payload);
	if (
		!payload.name ||
		!payload.price ||
		!payload.company ||
		!payload.category ||
		!payload.color
	) {
		return NextResponse.json({ result: 'Invalid Data', success: false });
	}
	return NextResponse.json({ result, success: true }, { status: 200 });
};

export const GET = async (request: Request, content: any) => {
	const productId = content?.params?.productId;
	const record = { _id: productId };
	await mongoose.connect(connectionSrt);
	const result = await Product.findById(record);
	return NextResponse.json({ result, success: true });
};
