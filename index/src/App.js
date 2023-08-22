// import { Ejemplo } from './Components/Public/Ejercicio 1';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from './Components/Public/Footer';
import { Main } from './Components/Public/Main';
import { Navbar } from './Components/Public/Navbar';
import { VistaFearless } from './Components/Public/VistaFearless';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Main />} />
          <Route exact={"/VistaFearless"} element={<VistaFearless />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
