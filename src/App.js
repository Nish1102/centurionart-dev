import { BrowserRouter } from "react-router-dom";
import { RouteProvider } from "./contexts/RouteContext";
import { routes } from "./config/routes";
import Router from "./components/Router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DrawerProvider } from "./context/DrawerContext";
import { ErrorProvider } from "./context/ErrorContext";

function App() {
  return (
    <BrowserRouter>
      <ErrorProvider>
        <DrawerProvider>
          <RouteProvider routes={routes}>
            <div className="App">
              <Router />
            </div>
          </RouteProvider>
        </DrawerProvider>
      </ErrorProvider>
    </BrowserRouter>
  );
}

export default App;
