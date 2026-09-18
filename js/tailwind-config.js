tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B14',
          900: '#0A1220',
          800: '#0F1B2E',
          700: '#16263D',
          600: '#223655',
        },
        gold: {
          300: '#FFE14D',
          400: '#FFD400',
          500: '#E6BE00',
          600: '#B88F00',
        },
        leaf: {
          400: '#33D17A',
          500: '#1FA855',
          600: '#158443',
        },
        paper: {
          50: '#F7F8FA',
          100: '#EEF0F3',
        },
        ink: {
          900: '#10141C',
          700: '#333B47',
          600: '#5B6472',
          400: '#8A93A2',
        },
        line: '#E2E5EA',
      },
      fontFamily: {
        display: ['"Rubik"', 'sans-serif'],
        body: ['"Golos Text"', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '22px',
        xl: '28px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,20,28,.05), 0 10px 26px -10px rgba(16,20,28,.16), 0 2px 8px -2px rgba(255,212,0,.10)',
        elevated: '0 24px 48px -16px rgba(6,11,20,.45), 0 6px 18px -6px rgba(255,212,0,.18)',
        glow: '0 10px 32px -6px rgba(255,212,0,.5)',
        'glow-green': '0 10px 28px -6px rgba(31,168,85,.55)',
      },
    },
  },
};
