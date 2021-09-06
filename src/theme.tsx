export const theme = {
  colors: {
    primary: {
      first: "hsl(185, 75%, 39%)",
      second: "hsl(229, 23%, 23%)",
      third: "hsl(227, 10%, 46%)"
    },
    neutral: {
      first: "hsl(0, 0%, 59%)",
      second: "hsl(224, 23%, 55%)",
      third: "hsl(223, 47%, 23%)"
    },
    white: "hsl(0, 0%, 100%)",
    black: ""
  },
  fontFamily: "Space Mono",
  fontSize: {
    input: "16px"
  },
  responsible: {
    mobile: "375px",
    desktop: "1440px"
  }
};

export type Theme = typeof theme;
