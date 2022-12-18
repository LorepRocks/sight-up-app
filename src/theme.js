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
    body1: {
      fontFamily: "QuicksandLight, sans-serif",
      fontSize: 14,
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
            fontFamily: "QuicksandRegular, sans-serif",
            fontSize: 14,
            textDecoration: "underline",
          },
        },
      ],
    },
  },
});

export default theme;
