import * as colors from "../theme/colors";

const Theme = {
  useCustomProperties: false,
  colors: {
    text: colors.text,
    primary: colors.primary,
    secondary: colors.secondary,
    background: colors.background,
    red: colors.red,
    blue: colors.blue,
    gray: colors.gray,
  },
  buttons: {
    primary: {
      color: 'background',
      borderRadius: 0,
      padding: '8px 30px',
      bg: 'primary',
      border: '2px solid',
      borderColor: 'primary',
      fontSize: 2,
      fontWeight: 'heading',
      textDecoration: 'none',
      '&:hover': {
        opacity: 0.8,
        cursor: 'pointer'
      }
    },
    secondary: {
      color: 'white',
      borderRadius: 0,
      padding: '8px 30px',
      bg: 'secondary',
      border: '2px solid',
      borderColor: 'secondary',
      fontSize: 2,
      fontWeight: 'heading',
      textDecoration: 'none',
      '&:hover': {
        opacity: 0.8,
        cursor: 'pointer'
      }
    }
  },
  forms: {
    input: {
      borderWidth: '1px',
      '&:focus': {
        outline: 'black',
        borderColor: 'black'
      }
    },
    select: {
      borderWidth: '1px',
      '&:focus': {
        outline: 'black',
        borderColor: 'black'
      }
    },
    textarea: {
      fontFamily: 'body',
      borderWidth: '1px',
      '&:focus': {
        outline: 'black',
        borderColor: 'black'
      }
    },
    label: {},
    radio: {},
    checkbox: {
      color: 'black'
    }
  },
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    body: 'GlacialIndifference, system-ui, sans-serif',
    heading: 'GlacialIndifference-Bold, system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [14, 16, 18, 22, 26, 34, 42, 50, 66, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.35,
    heading: 1.25
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: ['body', 'heading'],
      fontSize: [3, 5, 6]
    },
    h2: {
      color: 'purple',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      textDecoration: 'underline',
      fontSize: [3, 5]
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [2, 4]
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0
    },
    p: {
      color: 'gray',
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'body',
      lineHeight: 'body',
      margin: 4
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      '&:visited': {
        color: 'primary'
      }
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  },
  text: {
    heading: {
      fontFamily: ['heading'],
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4, 5, 7],
      my: 2
    },
    subheading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [3, 5],
      mb: 4,
    },
    eyebrow: {
      fontFamily: 'heading',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 2,
      mb: 4,
      color: 'primary',
    },
    large: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: '700',
      fontSize: [3, 4]
    },
    body: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 2
    },
    caption: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 2
    },
    formTitle: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [3, 4],
      my: 2
    },
    formHeader: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'bold',
      fontSize: 2
    },
    button: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 3
    },
    headline: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [2, 3],
      mb: 2
    },
    accordionNestedHeading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [2, 2],
      mb: 2,
    },
    accordionSubheader: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [2],
      mb: 2,
      color: 'purple',
    }
  },
  shadows: {
    card: '0px 6px 6px rgba(0, 0, 0, 0.25)'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  variants: {
    highlightTag: {
      color: 'secondary',
      bg: 'background',
      borderRadius: '20px'
    },
    lowlightTag: {
      color: 'background'
    },
    primaryLink: {
      color: 'primary',
      fontWeight: 'heading',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        opacity: 0.8
      }
    },
    secondaryLink: {
      color: 'secondary',
      fontWeight: 'heading',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        opacity: 0.8
      }
    },
    plainLink: {
      border: 0,
      textDecoration: 'none',
      padding: 0,
      borderRadius: 0
    },
    card: {
      p: 0,
      bg: 'background',
      boxShadow: 'card',
    },
    accordionCard: {
      bg: 'background',
      boxShadow: 'card',
    },
    formCard: {
      p: 3,
      bg: 'background',
      boxShadow: 'card',
      paddingTop: 2,
      paddingBottom: 2
    },
    cardLink: {
      textDecoration: 'none',
      flex: ['0 1 100%', '0 1 48%'],
      maxWidth: ['100%', '48%']
    },
    cardBlogContainer: {
      flex: ['0 1 100%', '0 1 30%'],
      maxWidth: ['100%', '30%']
    },
    cardBlogLink: {
      textDecoration: 'none'
    },
    cardProjectLink: {
      textDecoration: 'none',
      flex: ['0 1 100%', '0 1 48%'],
      maxWidth: ['100%', '48%']
    },
    cardImage: {
      boxShadow:
        '2px 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      bg: 'background',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 3,
      marginBottom: 3
    },
    heroCard: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
      borderRadius: 0,
      opacity: 0.8
    },
    nav: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 2,
      color: 'black',
      mx: 3,
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
        color: 'secondary'
      }
    },
    mobileNav: {
      color: 'black',
      my: 2,
      display: 'inline-block',
      textDecoration: 'none',
      fontSize: [4, 5]
    },
    footerLink: {
      color: 'secondary',
      width: '100%',
      lineHeight: '1em',
      fontSize: 1,
      height: '1em',
      marginBottom: '1em',
      fontWeight: 'heading',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        opacity: 0.8
      }
    },
    footerLegal: {
      color: 'secondary',
      paddingRight: '2em',
      lineHeight: '1em',
      fontSize: 0,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        opacity: 0.8
      }
    },
    footerText: {
      color: 'secondary',
      width: '100%',
      textDecoration: 'none'
    },
    mobileMenuClosed: {
      background: 'primary',
      left: 0,
      padding: 3,
      position: 'relative',
      top: 0,
      transition: 'background 0.05s',
      transitionDelay: '0s',
      width: '100%',
      zIndex: 20,
      opacity: 0.8,

      '@media screen and (min-width: 64em)': {
        display: 'none'
      }
    },
    mobileMenuOpened: {
      background: 'primary',
      left: 0,
      padding: 3,
      position: 'relative',
      top: 0,
      transition: 'background 0.05s',
      transitionDelay: '0.4s',
      width: '100%',
      zIndex: 20,

      '@media screen and (min-width: 64em)': {
        display: 'none'
      }
    },
    closeButtonBottom: {
      background: 'text',
      bottom: 1,
      borderRadius: '100%',
      boxShadow: '0 3px 3px rgba(0, 0, 0, 0.25)',
      color: 'background',
      fontSize: 3,
      height: 7,
      left: '40%',
      pb: '4px',
      position: 'fixed',
      transition: 'opacity 0.2s, transform 0.3s ease-in-out 0.4s',
      width: 7,
      zIndex: 30
    },
    formFullWidth: {
      flex: '0 1 100%',
      maxWidth: '100%',
      my: 2
    },
    formHalfWidth: {
      flex: ['0 1 100%', '0 1 49%'],
      maxWidth: ['100%', '49%'],
      my: 2
    }
  }
};

export default Theme;