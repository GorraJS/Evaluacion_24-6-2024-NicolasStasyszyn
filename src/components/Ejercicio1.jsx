import React from "react";
import { useState } from "react";

export default function Ejercicio1() {
  const [fruta, setFruta] = useState();

  const handleChangeFruta = () => {
    setFruta(fruta)
  };

  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>
      <label>Seleccione una fruta: </label>
      <select>
        <option className="Manzana" value={fruta} onSelect={handleChangeFruta}>
          Manzana
        </option>
        <option className="Pera" value={fruta} onSelect={handleChangeFruta}>
          Pera
        </option>
        <option className="Naranja" value={fruta} onSelect={handleChangeFruta}>
          Naranja
        </option>
        <option className="Mandarina" value={fruta} onSelect={handleChangeFruta}>
          Mandarina
        </option>
      </select>
      <h2>{fruta}</h2>
    </div>
  );
}
