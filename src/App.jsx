import './App.css'; // Archivo de estilos CSS

import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./themes/ThemeContext";
import RoutesApp from "./routes/RoutesApp";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`App ${theme}`}>
      <RoutesApp />
    </section>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;