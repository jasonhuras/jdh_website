import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import jdhThemeJson from './theme/jdh_theme.json';
import HomeLayout from './layouts/HomeLayout';
import InvestLayout from './layouts/InvestLayout';
import TradeLayout from './layouts/TradeLayout';
import ContactLayout from './layouts/ContactLayout';
import Footer from './components/Footer';

function App() {
  const jdhTheme = createTheme(jdhThemeJson);

  return (
    <ThemeProvider theme={jdhTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/invest" element={<InvestLayout />} />
          <Route path="/trade-history" element={<TradeLayout />} />
          <Route path="/contact-us" element={<ContactLayout />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
