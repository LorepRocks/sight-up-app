import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./components/Login";
import Montserrat from "../src/fonts/Montserrat.ttf";
import "./App.css";

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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
