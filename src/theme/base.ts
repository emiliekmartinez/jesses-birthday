export const base = {
  fonts: {
    body:
      'Lato, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
    heading:
      'Lato, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
    monospace: 'monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    bolder: 700
  },
  lineHeights: {
    default: 1,
    // : 1.25,
    body: 1.5,
    heading: 1.1
  },
  letterSpacings: {
    body: 'normal',
    heading: 'normal'
  },
  fontSizes: [
    8,
    10.2,
    12.8,
    16,
    20,
    25,
    31.3,
    39.1,
    48.8,
    61,
    76.3,
    95.4,
    119.2
  ],
  borderRadius: 5,
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 104],
  breakpoints: [
    '320px', // figure out mobile
    '500px',
    '768px',
    '900px',
    '1024px', //
    '1220px',
    '1440px' //
  ],
  zIndices: [-1, 10, 100, 500, 1000, 1100, 1200, 1300, 1400, 1500, 999_999_999]
};
