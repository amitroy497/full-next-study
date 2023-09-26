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
			<h1>Common Layout for About Page</h1>
			{children}
		</>
	);
};

export default AboutLayout;
