import Navbar from "./components/Navbar";
import { ThemeProvider } from '@mui/material';
import { theme } from "./theme";
import Promo from "./components/Promo";
import Offers from "./components/Offers";
import Analysis from "./components/Analysis";
import RaiseCapital from "./components/RaiseCapital";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Promo />
      <Offers />
      <Analysis />
      <RaiseCapital />
    </ThemeProvider>
  );
}

export default App;
