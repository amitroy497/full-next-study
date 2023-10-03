'use client';
import React, { FC } from 'react';

interface DescriptionClientComponentProps {
	desc: string;
}
const DescriptionClientComponent: FC<DescriptionClientComponentProps> = ({
	desc,
}) => {
	return (
		<>
			<h4>Description: {desc}</h4>
		</>
	);
};

export default DescriptionClientComponent;
