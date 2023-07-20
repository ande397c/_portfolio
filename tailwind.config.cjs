/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				body: "#252728",
				secondary: "#2E2F39",
				text: "#F4F4F5",
				accent_green: "#52B0A3",
				accent_red: "#f87272",
				grey: "#abb9c7",
			},
			screens: {
      			'mobile': '640px',
				'bp-730': '730px',
      			'tablet': '1024px',
      			'desktop': '1280px',
    },
		},
	},
	plugins: [],
}
