//import MAINAPP from "./components/APP/MAINAPP";
import "./App.css";
import { ProductProvider } from "./components/BASE/AddToCartContext";
import { useEffect, useState } from "react";
import { ROUTES } from "./components/ROUTES/ROUTES";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a 3-second loading time
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3300);

    // Clear the timeout on component unmount
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="container">
          <div className="loader">
            <div className="box box0">
              <div></div>
            </div>
            <div className="box box1">
              <div></div>
            </div>
            <div className="box box2">
              <div></div>
            </div>
            <div className="box box3">
              <div></div>
            </div>
            <div className="box box4">
              <div></div>
            </div>
            <div className="box box5">
              <div></div>
            </div>
            <div className="box box6">
              <div></div>
            </div>
            <div className="box box7">
              <div></div>
            </div>
            <div className="ground">
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <ProductProvider>
          <ROUTES />
        </ProductProvider>
      )}
    </>
  );
}

export default App;
