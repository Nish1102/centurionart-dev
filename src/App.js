import { BrowserRouter } from 'react-router-dom';
import { RouteProvider } from './contexts/RouteContext';
import { routes } from './config/routes';
import Router from './components/Router';
import Navigation from './components/landingpage/Navigation';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <RouteProvider routes={routes}>
        <div className="App">
          <Router />
        </div>
      </RouteProvider>
    </BrowserRouter>
  );
}

export default App;