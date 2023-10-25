import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import { ThemeProvider } from '@mui/material';
import { theme } from "./theme";
import Promo from "./components/Promo";
import Offers from "./components/Offers";
import Analysis from "./components/Analysis";
import RaiseCapital from "./components/RaiseCapital";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Promo />
      <Offers />
      <Analysis />
      <RaiseCapital />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
