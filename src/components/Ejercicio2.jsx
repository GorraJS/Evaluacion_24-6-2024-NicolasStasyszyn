import React from "react"
import { useState } from "react"

export default function Ejercicio2() {
  
  const [texto, setTexto] = useState('')
  const [num, setNum] = useState(0)

  const handleChangeTexto = (event) => {
    setTexto(event.target.value)
  }
  const handleChangeNum = () => {
    setNum(num)
  }
  const Submit = () => {

  }

  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form>
        <div>
          <input type="text" value={texto} onChange={handleChangeTexto}/>
        </div>
        <div>
          <input type="number" value={num} onChange={handleChangeNum}/> 
        </div>
        <div>
          <button type="submit" onClick={Submit}/>
        </div>
      </form>
    </div>
  )
}
