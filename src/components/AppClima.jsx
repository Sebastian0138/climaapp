import React from 'react'
import useClima from '../hooks/useClima'
import Formulario from './Formulario'
import Loading from './Loading'
import Resultado from './Resultado'
const AppClima = () => {

    const {resultado,cargando,noResultado}=useClima()
    console.log(resultado);
  return (
   <main className='dos-columnas'>
    <Formulario/>
   {cargando?<Loading/> :resultado.name ? <Resultado/> :noResultado?<p>{noResultado}</p>:<p>El clima se mostrara aqui</p>}
   </main>
  )
}

export default AppClima