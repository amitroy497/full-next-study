import { connectionSrt } from '@/db';
import { Product } from '@/lib/model/product';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
	let data = [];
	try {
		await mongoose.connect(connectionSrt);
		data = await Product.find();
		return NextResponse.json({ result: data, success: true });
	} catch (err) {
		data = [{ result: 'Something went wrong!', success: false }];
	}
}

export async function POST() {
	await mongoose.connect(connectionSrt);
	let product = new Product({
		name: 'Samsung Note 10',
		price: '30000',
		color: 'red',
		company: 'Samsung',
		category: 'Mobile',
	});
	const result = await product.save();
	return NextResponse.json({ result, success: true });
}
