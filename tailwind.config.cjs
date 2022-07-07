const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'primary': '#0070f3',
			},
			fontFamily: {
				Poppins: ['Poppins', 'sans-serif'],
				Raleway: ['Raleway', 'sans-serif'],
			  }
		}
	},

	plugins: []
};

module.exports = config;
