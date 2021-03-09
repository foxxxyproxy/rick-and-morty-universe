const PRIMARY = "#536FA6";
const LIGHT_SECONDARY = "#D95284";
const LIGHT_SECONDARY_DARK = "#592751";
const HIGLIGHT = "#38F289";
const HIGHLIGHT_DARK = "#3BD98F";

const DARK_PRIMARY = "rgba(255, 255, 255, 0.25)";
const DARK_SECONDARY = "rgba( 217, 82, 132, 0.25)";
const DARK_SECONDARY_DARK = "#592751";

const colors = {
  headerColor: HIGLIGHT,
  textColor: "white",
  dropdownTextColor: PRIMARY,
  primary: PRIMARY,
  secondary: LIGHT_SECONDARY,
  secondaryDark: LIGHT_SECONDARY_DARK,
  pageBackground: "#ffffff",
  shadowColor: HIGHLIGHT_DARK,
  textColorSecondary: LIGHT_SECONDARY,
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  borderRadius: "10px",
};

const darkColors = {
  headerColor: HIGLIGHT,
  textColor: "white",
  dropdownTextColor: "white",
  primary: DARK_PRIMARY,
  secondary: DARK_SECONDARY,
  secondaryDark: DARK_SECONDARY_DARK,
  pageBackground: PRIMARY,
  shadowColor: HIGHLIGHT_DARK,
  textColorSecondary: DARK_SECONDARY,
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  borderRadius: "10px",
};

export const defaultTheme = {
  ...colors,
};

export const darkTheme = {
  ...darkColors,
};

export default defaultTheme;
