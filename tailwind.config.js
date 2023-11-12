/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', 'node_modules/preline/dist/*.js'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				md: '768px'
			},
			fontSize: {
				'7xl': '4.5rem',
				'9xl': '8rem'
			}
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		}
	},
	plugins: [require('preline/plugin')]
};
