import { Routes, Route } from "react-router-dom";
import Advertising from "../pages/Advertising"

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Advertising />} />
    </Routes>
  );
};
export default Rotas;
