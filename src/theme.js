import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#AB86CC",
    },
    secondary: {
      main: "#EF9762",
      dark: "#B38A71",
    },
    error: {
      main: "#ee6365",
    },
  },
  typography: {
    subtitle1: {
      fontFamily: "QuicksandBold, sans-serif",
      fontSize: 24,
    },
    subtitle2: {
      fontFamily: "QuicksandLight, sans-serif",
      fontSize: 16,
    },
    subtitle3: {
      fontFamily: "QuicksandLight, sans-serif",
      fontSize: 12,
    },
    body1: {
      fontFamily: "QuicksandRegular, sans-serif",
      fontSize: 15,
    },
    button: {
      fontFamily: "QuicksandBold, sans-serif",
      fontSize: 14,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "link" },
          style: {
            textTransform: "none",
            fontFamily: "QuicksandLight, sans-serif",
            fontSize: 12,
            margin: 0,
            padding: 0,
          },
        },
      ],
    },
  },
});

export default theme;
