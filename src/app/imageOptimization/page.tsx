import Image from 'next/image';
import Link from 'next/link';
import Profile from '../../../public/vercel.svg';
import custom from './custom.module.css';

const ImageOptimizationPage = () => {
	return (
		<>
			<h1>Image Optimization</h1>
			<div className={custom.divCss}>
				<Image src={Profile} alt='VercelImage' width='500' height='500' />
			</div>
			<Link href='/'>Back to Home Page</Link>
			<Image
				src='https://omreels.in/wp-content/uploads/2022/03/Mahadev-Wallpaper-Full-Hd.jpg'
				alt='Mahadev'
				width='500'
				height='500'
			/>
		</>
	);
};

export default ImageOptimizationPage;
