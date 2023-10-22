import Navbar from "./components/Navbar";
import { ThemeProvider } from '@mui/material';
import { theme } from "./theme";
import Promo from "./components/Promo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Promo />
    </ThemeProvider>
  );
}

export default App;
