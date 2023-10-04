/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['omreels.in'],
	},
	redirects: async () => {
		return [
			{
				source: '/redirectFeatureUsingConfig',
				destination: '/',
				permanent: false,
			},
			{
				source:
					'/redirectFeatureUsingConfig/:dynamicRedirectFeatureUsingConfig',
				destination: '/',
				permanent: false,
			},
			{
				source: '/notExistingPage',
				destination: '/',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
