import { createContext, useState, useContext, useEffect } from "react";
import api from "../../services";

const VeiculesContext = createContext();

export const VeiculesProvider = ({ children }) => {
  const [veiculesList, setVeiculesList] = useState([]);
  const [selectedVeicule, setSelectedVeicule] = useState({});

  useEffect(() => {
    listVeicules();
  }, []);

  const listVeicules = () => {
    api.get("/veicules").then((res) => setVeiculesList(res.data));
  };

  const getVeicule = (id) => {
    api.get(`/veicules/${id}`).then((res) => setSelectedVeicule(res.data));
  };

  return (
    <VeiculesContext.Provider
      value={{ veiculesList, getVeicule, selectedVeicule }}
    >
      {children}
    </VeiculesContext.Provider>
  );
};

export const useVeicules = () => useContext(VeiculesContext);
