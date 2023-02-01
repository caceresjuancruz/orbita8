import React from "react";
import { Routes, Route } from "react-router-dom";
import Features from "./components/Features";
import ContactForm from "./components/ContactForm";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import "animate.css";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1200;

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row bg vh-100">
          <div className="col-12 col-xl-8 text-center p-0" id="main-col">
            <Routes>
              <Route path="/*" element={<Main />} />
              <Route path="/portfolio" element={<Portfolio />} />

              {width > breakpoint ? null : (
                <Route path="/form" element={<ContactForm />} />
              )}
            </Routes>
          </div>
          <div className="col-12 col-xl-4 p-0 align-items-center secondary-col-mobile">
            <div className="container ">
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
        .secondary-col-mobile {
          display: none;
        }

        @media (min-width: 1200px) {
          .secondary-col-mobile {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
