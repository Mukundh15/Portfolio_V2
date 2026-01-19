import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import Footer from "./component/Footer";
import Loader from "./component/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;

