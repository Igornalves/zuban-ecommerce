import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>

      <GlobalStyles/>
    </ThemeProvider>
  )
}
