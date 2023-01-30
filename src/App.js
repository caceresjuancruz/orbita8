import { Routes, Route } from "react-router-dom";
import Features from "./components/Features";
import ContactForm from "./components/ContactForm";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import "animate.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row bg vh-100">
          <div className="col-12 col-xl-8 text-center p-0" id="main-col">
            <Routes>
              <Route path="/*" element={<Main />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
          <div className="col-12 col-xl-4 p-0 d-flex align-items-center">
            <div className="container secondary-col">
              <Routes>
                <Route path="/*" element={<Features />} />
                <Route path="/form" element={<ContactForm />} />
                <Route path="/portfolio" element={<Features />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .secondary-col {
        }

        @media (min-width: 768px) {
        }
      `}</style>
    </div>
  );
}

export default App;
