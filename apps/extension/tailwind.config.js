module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // 覆盖所有基于 rem 的配置
    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
    },
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '22px'],
        base: ['16px', '24px'],
        lg: ['18px', '26px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
        full: '9999px',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
};
