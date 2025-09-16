import { type Config } from 'tailwindcss';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config = {
	// ... other properties
	theme: {
		extend: {
			boxShadow: {
				input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`
			}
		}
	},
	plugins: [addVariablesForColors]
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          foreground: '#000000'
        },
        muted: '#F3F4F6',
      },
      minHeight: {
        'svh': '100svh',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    },
  ],
} satisfies Config;
