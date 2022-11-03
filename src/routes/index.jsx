import { Routes, Route } from "react-router-dom";
import Advertising from "../pages/Advertising";
import ProductDetails from "../pages/ProductDetails";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Advertising />} />
      <Route path="/product" element={<ProductDetails />} />
    </Routes>
  );
};
export default Rotas;
