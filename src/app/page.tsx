'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			Home Page
			<br />
			<br />
			<Link href='/login'>Go To Login Page</Link>
			<br />
			<br />
			<Link href='/about'>Go To About Page</Link>
			<br />
			<br />
			<Link href='/about/aboutStudent'>Go To About Student Page</Link>
			<br />
			<br />
			<Link href='/about/aboutCollege'>Go To About College Page</Link>
			<br />
			<br />
			<Link href='/studentList'>Go To Student List Page</Link>
			<br />
			<br />
			<Link href='/teacherList'>Go To Teacher List Page</Link>
			<br />
			<br />
			<Link href='/study'>Go To Study Page</Link>
			<br />
			<br />
			<Link href='/productListClientSide'>
				Go To Product List Client Side Page
			</Link>
			<br />
			<br />
			<Link href='/productListServerSide'>
				Go To Product List Server Side Page
			</Link>
			<br />
			<br />
			<Link href='/imageOptimization'>Go To Image Optimization Page</Link>
			<br />
			<br />
			<Link href='/fontOptimization'>Go To Font Optimization Page</Link>
			<br />
			<br />
			<Link href='/generateMetaData'>Go To Generate MetaData Page</Link>
			<br />
			<br />
			<Link href='/scriptComponent'>Go To Script Component Page</Link>
			<br />
			<br />
			<Link href='/loadingFeature'>Go To Loading Feature Page</Link>
			<br />
			<br />
			<Link href='/redirectFeature'>Go To Redirect Feature Page</Link>
			<br />
			<br />
			<Link href='/redirectFeatureUsingConfig'>
				Go To Redirect Feature Using Config Page
			</Link>
			<br />
			<br />
			<Link href='/api/apiRoutes'>Check Api Routes</Link>
			<br />
			<br />
			<Link href='/api/apiRoutesWithStaticData'>
				Check Api Routes With Static Data
			</Link>
			<br />
			<br />
			<Link href='/callNextApi'>Go To Call Next Api Page</Link>
			<br />
			<br />
			<Link href='/integratePostApiWithUI'>
				Go To Integrate Post Api With UI Page
			</Link>
			<br />
			<br />
			<Link href='/api/callAllApiRoutes'>Call All Api Routes</Link>
			<br />
			<br />
			<Link href='/addProduct'>Go To Add Product Page</Link>
			<br />
			<br />
			<Link href='/showProducts'>Go To Show Products Page</Link>
			<br />
			<br />
			<br />
			<button onClick={() => router.push('/login')}>
				Navigate To Login Page
			</button>
			<br />
			<button onClick={() => router.push('/about')}>
				Navigate To About Page
			</button>
			<br />
			<button onClick={() => router.push('/about/aboutStudent')}>
				Navigate To About Student Page
			</button>
			<br />
			<button onClick={() => router.push('/about/aboutCollege')}>
				Navigate To About College Page
			</button>
			<br />
			<button onClick={() => router.push('/studentList')}>
				Navigate To Student List Page
			</button>
			<br />
			<button onClick={() => router.push('/teacherList')}>
				Navigate To Teacher List Page
			</button>
			<br />
			<button onClick={() => router.push('/productListClientSide')}>
				Navigate To Product List Client Side Page
			</button>
			<br />
			<button onClick={() => router.push('/productListServerSide')}>
				Navigate To Product List Server Side Page
			</button>
			<br />
			<button onClick={() => router.push('/imageOptimization')}>
				Navigate To Image Optimization Page
			</button>
			<br />
			<button onClick={() => router.push('/fontOptimization')}>
				Navigate To Font Optimization Page
			</button>
			<br />
			<button onClick={() => router.push('/generateMetaData')}>
				Navigate To Generate MetaData Page
			</button>
			<br />
			<button onClick={() => router.push('/scriptComponent')}>
				Navigate To Script Component Page
			</button>
			<br />
			<button onClick={() => router.push('/loadingFeature')}>
				Navigate To Loading Feature Page
			</button>
			<br />
			<button onClick={() => router.push('/redirectFeature')}>
				Navigate To Redirect Feature Page
			</button>
			<br />
			<button
				onClick={() =>
					router.push('/redirredirectFeatureUsingConfigectFeature')
				}
			>
				Navigate To Redirect Feature Using Config Page
			</button>
			<br />
			<button onClick={() => router.push('/api/apiRoutes')}>
				Navigate To Check Api Routes
			</button>
			<br />
			<button onClick={() => router.push('/api/apiRoutesWithStaticData')}>
				Navigate To Check Api Routes With Static Data
			</button>
			<br />
			<button onClick={() => router.push('/callNextApi')}>
				Navigate To Call Next Api Page
			</button>
			<br />
			<button onClick={() => router.push('/integratePostApiWithUI')}>
				Navigate To Integrate Post Api With UI Page
			</button>
			<br />
			<button onClick={() => router.push('/api/callAllApiRoutes')}>
				Navigate To Call All Api Routes
			</button>
			<br />
			<button onClick={() => router.push('/addProduct')}>
				Navigate To Add Product Page
			</button>
			<br />
			<button onClick={() => router.push('/showProducts')}>
				Navigate To Show Products Page
			</button>
		</main>
	);
}
