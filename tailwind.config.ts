import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'rgb(var(--tw-border) / <alpha-value>)',
        input: 'rgb(var(--tw-input) / <alpha-value>)',
        ring: 'rgb(var(--tw-ring) / <alpha-value>)',
        background: 'rgb(var(--tw-background) / <alpha-value>)',
        foreground: 'rgb(var(--tw-foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--tw-primary) / <alpha-value>)',
          foreground: 'rgb(var(--tw-primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--tw-secondary) / <alpha-value>)',
          foreground: 'rgb(var(--tw-secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'rgb(var(--tw-destructive) / <alpha-value>)',
          foreground: 'rgb(var(--tw-destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--tw-muted) / <alpha-value>)',
          foreground: 'rgb(var(--tw-muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--tw-accent) / <alpha-value>)',
          foreground: 'rgb(var(--tw-accent-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'rgb(var(--tw-popover) / <alpha-value>)',
          foreground: 'rgb(var(--tw-popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'rgb(var(--tw-card) / <alpha-value>)',
          foreground: 'rgb(var(--tw-card-foreground) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--tw-radius)',
        md: 'calc(var(--tw-radius) - 2px)',
        sm: 'calc(var(--tw-radius) - 4px)',
      },
    },
  },
  plugins: [],
}

export default config