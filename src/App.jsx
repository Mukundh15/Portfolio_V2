import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import PillNavbar from "./component/PillNavbar";
import Home from "./Pages/Home";
import Footer from "./component/Footer";
const App = () => {
  return (
    <ThemeProvider>
      <PillNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;

