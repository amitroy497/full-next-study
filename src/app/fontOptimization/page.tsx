import Link from 'next/link';
import { roboto } from './customFont';

const FontOptimizationPage = () => {
	return (
		<>
			<h1>Font Optimization Page</h1>
			<h2 className={roboto.className}>Font Optimized</h2>
			<Link href='/'>Back To Home Page</Link>
		</>
	);
};

export default FontOptimizationPage;
