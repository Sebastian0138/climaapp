import React from 'react'
import useClima from '../hooks/useClima'

const Resultado = () => {

    const {resultado,cargando}=useClima()
    const {name,main}=resultado
    const kelvin=273.15
  return (
    
    <div className="contenedor clima">
        <h2>El Clima de {name} es: </h2>
        <p> {(main.temp-kelvin).toFixed(0)} <span>&#x2103;</span></p>
        <div className='temp_min_max'>
        <p>Min: {(main.temp_min-kelvin).toFixed(0)} <span>&#x2103;</span></p>
        <p>Max: {(main.temp_max-kelvin).toFixed(0)} <span>&#x2103;</span></p>

        </div>
    </div>


  )
}

export default Resultado