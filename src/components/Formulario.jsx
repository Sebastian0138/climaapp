import React, { useState } from 'react'
import useClima from '../hooks/useClima'


const Formulario = () => {

    const [alerta, setAlerta] = useState('')
    const {datosBusqueda,busqueda,consultarClima}= useClima()

    const {ciudad,pais}=busqueda
    const handleSubmit=(e)=>{

        e.preventDefault()

        if(Object.values(busqueda).includes('')){

            setAlerta('Todos los campos son obligatorios')
            return
        }
        consultarClima(busqueda)
        setAlerta('')
    }
  return (
    <div className='contenedor'>
        {alerta && <p>{alerta}</p>}
        <form action="">
            <div className="campo">
                <label htmlFor="ciudad" className="ciudad">Ciudad</label>
                <input type="text" id='ciudad' name='ciudad' onChange={datosBusqueda} value={ciudad} />
            </div>
            <div className="campo">
                <label htmlFor="pais" className="pais">País</label>
                <select name="pais" id="pais" onChange={datosBusqueda} value={pais}>
                <option value="">Seleccione un pais</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">Mexico</option>
                <option value="AR">Argentina⭐⭐⭐</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>
                </select>
            </div>
            <input type="submit" onClick={handleSubmit} value='Consultar Clima' />

        </form>
    </div>
  )
}

export default Formulario