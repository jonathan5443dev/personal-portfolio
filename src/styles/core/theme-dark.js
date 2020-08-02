import colors from "./colors";

export default {
  name: "dark",
  font: {
    family: { primary: "Roboto", secondary: "Anton" },
    color: { primary: colors.white.normal },
    size: {
      title: "6rem",
      subtitle: "3rem",
      highlight: "2rem",
      normal: "1rem",
      caption: "0.8rem"
    }
  },
  colors: {
    primary: colors.anakiwa,
    secondary: colors.red,
    bgColor: colors.black.normal
  },
  spacing: multiplier => `${multiplier * 8}px`
};
