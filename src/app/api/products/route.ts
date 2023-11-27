import { connectionSrt } from '@/db';
import { Product } from '@/lib/model/product';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		await mongoose.connect(connectionSrt);
		const data = await Product.find();
		return NextResponse.json({ result: data, success: true });
	} catch (err) {
		return NextResponse.json({
			result: 'Something went wrong!',
			success: false,
		});
	}
}

export async function POST(request: any) {
	const payload = await request.json();
	await mongoose.connect(connectionSrt);
	let product = new Product(payload);
	const result = await product.save();
	return NextResponse.json({ result, success: true });
}
