/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'zx-bg': 'var(--zx-bg)',
        'zx-bg-soft': 'var(--zx-bg-soft)',
        'zx-surface': 'var(--zx-surface)',
        'zx-surface-strong': 'var(--zx-surface-strong)',
        'zx-border': 'var(--zx-border)',
        'zx-text': 'var(--zx-text)',
        'zx-text-muted': 'var(--zx-text-muted)',
        'zx-accent': 'var(--zx-accent)',
        'zx-accent-strong': 'var(--zx-accent-strong)',
        'zx-success': 'var(--zx-success)',
        'zx-warning': 'var(--zx-warning)',
        'zx-danger': 'var(--zx-danger)',
      },
      fontFamily: {
        heading: ['Sora', 'Segoe UI', 'sans-serif'],
        body: ['IBM Plex Sans', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 40px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
