module.exports = {
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	preset: 'ts-jest',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	// https://github.com/zeit/next.js/issues/8663#issue-490553899
	globals: {
		// we must specify a custom tsconfig for tests because we need the typescript transform
		// to transform jsx into js rather than leaving it jsx such as the next build requires. you
		// can see this setting in tsconfig.jest.json -> "jsx": "react"
		'ts-jest': {
			tsConfig: '<rootDir>/tsconfig.jest.json'
		}
	},
	moduleNameMapper: {
		'react-i18next': '<rootDir>/src/__mocks__/mockReactI18next.ts'
	}
};
