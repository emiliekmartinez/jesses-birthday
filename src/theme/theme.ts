import * as colors from "./colors";
import { base } from "./base";

const theme = {
  ...base,
  colors: {
    text: colors.blueSteel,
    background: background,
    heading: colors.blueSteel,

    primary: colors.primary,
    secondary: colors.blueSteel,
    accent: colors.accent,
    muted: colors.muted,

    grey: colors.grey,
    white: background,
    black: colors.black,

    disabled: colors.grey,
    disabledBorder: colors.lightGrey
  },
  fonts: {
    body: "Lato, system-ui, sans-serif",
    heading: "Lato, system-ui, sans-serif",
    monospace: "Menlo, monospace"
  },
  navbar: {
    background: "#FFF",
    collapseAt: "1000px",
    minHeight: "40px",
    logoHeight: "25px",
    itemSpacing: "1rem",
    padding: "10px",
    borderColor: "lightgrey",
    borderWidth: "2px",
    borderOffset: "-10px",
    dropdown: {
      padding: ".5rem 1.5rem",
      mobilePadding: ".5rem",
      background: "#FFF",
      backgroundHover: "#DDD",
      border: `1px solid ${colors.blueSteel}`,
      borderRadius: "3px"
    }
  },
  forms: {
    select: {
      backgroundColor: "#FFF",
      border: "1px solid #a7a9ac",
      borderRadius: "5px",
      color: background,
      floatingLabel: {
        paddingTop: "1.2em"
      },
      focus: {
        borderColor: "#636aff",
        labelColor: "#636aff"
      },
      fontSize: "1em",
      fontSizeSmall: ".75em",
      height: "50px",
      outline: "none",
      padding: ".3375rem .75rem"
    }
  },
  breadcrumb: {
    color: colors.blueSteel,
    inverseColor: background,
    margin: "0 6px",
    crumbOpacity: 0.45
  },
  // buttons: {
  //   fontSize: "1em",
  //   lineHeight: "1",
  //   boxShadow: "2px 2px 0 0 rgba(0, 0, 0, .2)",
  //   hoverBoxShadow: "none",
  //   border: "1px solid #000",
  //   transition: "transform 0.15 ease-out",
  //   sizes: {
  //     small: {
  //       padding: "6px 24px"
  //     },
  //     regular: {
  //       padding: "10px 24px"
  //     },
  //     large: {
  //       padding: "14px 24px"
  //     }
  //   },
  //   primary: {
  //     color: "#FFF",
  //     border: "1px solid #636AFF",
  //     backgroundColor: "#636AFF",
  //     hoverColor: "#4247aa",
  //     hoverBackgroundColor: "#B6B9FF",
  //     hoverBorder: "1px solid #636AFF",
  //     activeColor: "#4247aa",
  //     activeBackgroundColor: "#B6B9FF",
  //     activeBorder: "1px solid #636AFF",
  //     activeTransform: 0.95
  //   },
  //   secondary: {
  //     color: "#636AFF",
  //     border: "1px solid #636AFF",
  //     backgroundColor: "#FFF",
  //     hoverColor: "#4247aa",
  //     hoverBackgroundColor: "#B6B9FF",
  //     hoverBorder: "1px solid #636AFF",
  //     activeTransform: 0.95
  //   }
  // },
  // card: {
  //   padding: "40px",
  //   raised: {
  //     boxShadow: "20px 20px 0 0 rgba(0,0,0,.3)"
  //   },
  //   interactive: {
  //     boxShadow: "10px 10px 0 0 rgba(0,0,0,.2)",
  //     boxShadowHover: "20px 20px 0 0 rgba(0,0,0,.3)"
  //   }
  // },
  links: {
    default: {
      default: {
        color: colors.blueSteel,
        hover: colors.blueSteel,
        disabled: colors.blueSteel
      },
      inverse: {
        color: background,
        hover: background,
        disabled: background
      }
    },
    primary: {
      default: {
        color: colors.primary,
        hover: colors.primary,
        disabled: colors.primary
      },
      inverse: {
        color: background,
        hover: background,
        disabled: background
      }
    },
    secondary: {
      default: {
        color: colors.primary,
        hover: colors.primary,
        disabled: colors.primary
      },
      inverse: {
        color: background,
        hover: background,
        disabled: background
      }
    }
  },
  paper: {
    default: {
      background: "white",
      borderRadius: "5px",
      border: "1px solid lightgrey",
      boxShadow: "10px 10px 0 0 rgba(0, 0, 0, .3)"
    },
    raised: {
      background: "white",
      borderRadius: "5px",
      border: "1px solid lightgrey",
      boxShadow: "20px 20px 0 0 rgba(0, 0, 0, .3)"
    }
  },
  headings: {
    heading: {
      color: "heading",
      fonts: "heading"
    },
    subheading: {
      color: "#555555",
      fonts: "heading"
    }
  }
};

type Theme = typeof theme;
export interface ThemeProps {
  theme: Theme;
}

export default theme;
