import Navbar from "./components/Navbar";
import { ThemeProvider } from '@mui/material';
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
