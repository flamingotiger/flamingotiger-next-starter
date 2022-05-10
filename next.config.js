// const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const dotenv = require('dotenv');
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});
const path = require('path');

dotenv.config();

// const { BACKEND_BASE_URL } = process.env;

const nextConfig = phase => {
	// const isDev = phase === PHASE_DEVELOPMENT_SERVER;
	// const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
	// const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

	// const env = {
	// 	BACKEND_BASE_URL: (() => {
	// 		if (isDev || isProd || isStaging) return BACKEND_BASE_URL;
	// 		return 'BACKEND_BASE_URL:not (isDev,isProd && !isStaging,isProd && isStaging)';
	// 	})(),
	// };
	return {
		typescript: {
			ignoreDevErrors: true
		},
		webpack5: true, // webpack5: false면 4버전
		// env,
		webpack(config, { webpack }) {
			config.resolve = {
				alias: {
					'@services': path.resolve(__dirname, 'src/services'),
					'@utils': path.resolve(__dirname, 'src/utils'),
					'@hooks': path.resolve(__dirname, 'src/hooks'),
					'@components': path.resolve(__dirname, 'src/components'),
					'@store': path.resolve(__dirname, 'src/store')
				},
				...config.resolve
			};
			config.resolve.modules.push(__dirname);
			config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /\/__tests__\// }));
			return config;
		}
	};
};

module.exports = phase => withOptimizedImages(withBundleAnalyzer(nextConfig(phase)));
