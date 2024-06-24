import React from "react";
import { useState } from "react";

export default function Ejercicio2() {
  const [texto, setTexto] = useState("");
  const [num, setNum] = useState();

  const handleChangeTexto = (event) => {
    setTexto(event.target.value);
  };
  const handleChangeNum = (event) => {
    setNum(event.target.value);
  };

  const Submit = () => {
    if (num < 18) {
      window.alert(texto + " tiene " + num + " años y es menor de edad");
    } else {
      window.alert(texto + " tiene " + num + " años y es mayor de edad");
    }
  };

  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form>
        <div>
          <input type="text" value={texto} onChange={handleChangeTexto} />
        </div>
        <div>
          <input type="numeric" value={num} onChange={handleChangeNum} />
        </div>
        <div>
          <button type="submit" onClick={Submit}>
            enviar
          </button>
        </div>
      </form>
    </div>
  );
}
