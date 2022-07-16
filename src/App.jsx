import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from './components/Header';
import Footer from './components/Footer';
import ListItem from './components/list/ListItem';

const theme = {
  colors: {
    primary: '#E2E8E9',
    white001: '#FFFFFF',
  },
  fonts: {
    title: 'Inter',
  }
}
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`
const MainBodylist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <MainBodylist>
          <ListItem />
        </MainBodylist>
        <Footer />
    </ThemeProvider>
  );
}

export default App
