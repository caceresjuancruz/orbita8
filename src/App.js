import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./components/Features";
import Formulario from "./components/Formulario";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-12 col-md-9 vh-100 text-center bg"
              id="main-col"
            >
              <Routes>
                <Route path="/*" element={<Main />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </div>
            <div className="col-12 col-md-3 vh-100 p-0">
              <Routes>
                <Route path="/" element={<Features />} />
                <Route path="/form" element={<Formulario />} />
                <Route path="/portfolio" element={<Features />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
