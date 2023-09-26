'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

interface AboutLayoutProps {
	children: React.ReactNode;
}
const AboutLayout: FC<AboutLayoutProps> = ({ children }) => {
	const pathName = usePathname();
	return (
		<>
			{pathName === '/about/aboutCollege' ? (
				<h1>Common Layout for About College Page</h1>
			) : pathName === '/about/aboutStudent' ? (
				<h1>Common Layout for About Student Page</h1>
			) : (
				<h1>Common Layout for About Page</h1>
			)}
			{children}
		</>
	);
};

export default AboutLayout;
