import logo from "./logo.svg";
import "./App.css";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import ResponsiveFrame from "./components/responsiveFrame";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3843D0",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});
function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MuiThemeProvider theme={theme}>
        <ResponsiveFrame
          app={
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          }
        />
      </MuiThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
