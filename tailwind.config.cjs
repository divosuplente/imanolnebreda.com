const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				darkmode: '#3D4551'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('daisyui')]
};

module.exports = config;
