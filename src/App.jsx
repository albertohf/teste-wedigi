import { createGlobalStyle, ThemeProvider } from "styled-components";
import Home from "./pages/Home";


const theme = {
  colors: {
    primarygray: '#E2E8E9',
    white001: '#FFFFFF',
  },
  fonts: {
    title: 'Inter',
  }
}
const GlobalStyle = createGlobalStyle`
  body {
    width:100vw;
    margin: 0;
    padding: 0;
  }`


function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home/>
    </ThemeProvider>
  );
}

export default App
