import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        {/* Your app content here */}
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;