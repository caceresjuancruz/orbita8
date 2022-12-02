import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./components/Features";
import ContactForm from "./components/ContactForm";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import "animate.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-12 col-xl-9 vh-100 text-center bg p-0"
              id="main-col"
            >
              <Routes>
                <Route path="/*" element={<Main />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </div>
            <div className="col-12 col-xl-3 vh-100 p-0 shadow-lg">
              <div className="container">
                <Routes>
                  <Route path="/" element={<Features />} />
                  <Route path="/form" element={<ContactForm />} />
                  <Route path="/portfolio" element={<Features />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
