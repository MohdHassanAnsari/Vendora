import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/authentication/Login";
import { Registration } from "./components/authentication/Registration";
import { Home } from "./components/home/Home";
import { ProductsDisplay } from "./components/products/ProductsDisplay";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/products-display" element={<ProductsDisplay />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
