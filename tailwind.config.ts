import type { Config } from 'tailwindcss';
import { withTV } from 'tailwind-variants/transformer'

const config: Config = withTV({
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			'--base-background': '#071422',
			'--base-border': '#1C2F41',
			'--base-input': '#040F1A',
			'--base-label': '#3A536B',
			'--base-post': '#112131',
			'--base-profile': '#0B1B2B',
			'--base-span': '#7B96B2',
			'--base-subtitle': '#C4D4E3',
			'--base-text': '#AFC2D4',
			'--base-title': '#E7EDF4',
			'--brand-blue': '#3294F8'
		},
		fontFamily: {
			nunito: ['--font-nunito']
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'decoration01': "url('/effect.svg')",
				'decoration02': "url('/effect2.svg')"
			},
			maxWidth: {
				'3.5xl': '54rem',
				'8.25': '90rem'
			},
			boxShadow: {
				'3xl': '0px 2px 28px 0px rgba(0, 0, 0, 0.20)'
			},
			borderRadius: {
				'xlg': '0.625rem'
			}
		},
		screens: {
			'sm': '0px',
			'md': '907.5px'
		}
	},
	plugins: [],
});

export default config;