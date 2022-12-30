module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,html,png,js,json,mp3,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};