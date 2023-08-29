import { Navbar } from './Components/Public/Navbar';
import './App.css';
import { Route, Routes } from "react-router-dom";
// import Main from './Components/Public/Main';
// import { VistaFearless } from './Components/Public/VistaFearless';
import { Footer } from './Components/Public/Footer';
// import ComponenteMain from './Components/Public/ComponenteMain';
// import Main1 from './Components/Public/Main1';
// import Main2 from './Components/Public/Main2';
import MainRM from './Components/Public/MainRM';
import { DetailRM } from './Components/Public/DetailRM';
import { UserFormRM } from './Components/Public/UserFormRM';
function App() {
  return (
    <div className="App">
      {/* Ejercicio 1 */}
      {/* <Ejemplo /> */}

      {/* Ejercicio 2 */}
      <Navbar />

      {/* <Routes>
          <Route exact path={"/"} element={<Main />} />
          <Route exact path={"/VistaFearless"} element={<VistaFearless />} />
        </Routes> */}

      {/* Ejercicio 3 */}
      {/* <ComponenteMain /> */}

      {/* Ejercicio 4 */}
      {/* <Routes>
        <Route exact path={"/"} element={<Main1 />} />
        <Route exact path={"/LexusLS"} element={<Main2 />} />
      </Routes> */}

      {/* Ejercicio 6 */}
      <Routes>
        <Route exact path={"/"} element={<MainRM />} />
        <Route exact path={"/detail/:id"} element={<DetailRM />} />
        <Route exact path={"/user-form"} element={<UserFormRM />} />
      </Routes>

      {/* Ejercicio 5 */}
      <Footer />
    </div>
  );
}

export default App;
