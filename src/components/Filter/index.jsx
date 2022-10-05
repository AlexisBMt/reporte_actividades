import React, { useState } from 'react'

function Filter ( {query, datos, consultaQuery, updateUrl, url, consulta} ) {
  let bandera = false
  const filtro = []
  //  if(query === 'trabajado') filtro.push(dato[query].slice(0,10))
  query === 'trabajado' ? datos.map( dato => {return filtro.push(dato[query].slice(0, 10))}) : datos.map( dato => { return filtro.push(dato[query]) })
  const dataArr = new Set(filtro);
  let result = [...dataArr].sort()
  const [filter] = useState(result)

  const button_label  = (query, consulta) => {
    let label = consulta[consulta.indexOf(query) + 1]
    if(query === 'estatus'){
      if( consulta[consulta.indexOf(query) + 1] <= 1 ) label = 'PENDIENTE'
      else if(consulta[consulta.indexOf(query) + 1] === '2') label = 'ACEPTADO'
      else label = 'RECHAZADO'
    }
    if(query === 'trabajado'){
      label = consulta[consulta.indexOf(query) + 1]
      label = `${label.slice(8,10)}/${label.slice(5,7)}/${label.slice(0,4)}`
    }
    return label
  }

  const handlerClick = (event) => {
    if(typeof (consulta[consulta.indexOf(query) + 1]) === 'undefined' ) consulta[consulta.indexOf(query) + 1] = ''
    if(event.target.value === 'None'){
      consulta[consulta.indexOf(query) + 1] = ''
      for(let i = 0; i < consulta.length-1; i++){
        if( (i % 2) === 0 && consulta[i+1] !== '' && consulta[i+1] !== undefined ){
          bandera = true
        }
      }
      consultaQuery(consulta)
      if(!bandera){
        updateUrl(url)
      }else{
        let search = '' 
        for(let i = 0; i < consulta.length-1; i++){
          if( (i % 2) === 0 && consulta[i+1] !== '' && consulta[i+1] !== undefined ){
            search += `${consulta[i]},${consulta[i+1]},`
          }
        }
        updateUrl(`${url}/q=${search}`)
        consultaQuery(consulta)  
      } 
    }

    if(event.target.value !== 'None'){
      let search = '' 
      bandera = true
      consulta[consulta.indexOf(query) + 1] = event.target.value;
      for(let i = 0; i < consulta.length-1; i++){
        if( (i % 2) === 0 && consulta[i+1] !== '' && consulta[i+1] !== undefined ){
          search += `${consulta[i]},${consulta[i+1]},`
        }
      }
      updateUrl(`${url}/q=${search}`)
      consultaQuery(consulta)
    }
  }

  if (consulta.includes(undefined)) {
    consulta[consulta.indexOf(undefined)] = ''
  }

  return(
    <div className='p-2'>
      <select className='block p-0 mb-2 rounded-md text-xs border-2 focus:outline-none focus:border-blue-500 w-52' id='select' onClick={handlerClick}>
        <option value='None'>None</option>
        {filter.map(element => (
          query === 'estatus' ? <option className='truncate' value={element}  key={Math.random() * (1000 - 1) + 1}>{element <= 1 ? 'PENDIENTE' : element === 2 ? 'ACEPTADO' : 'RECHAZADO'}</option> 
          : query === 'trabajado' ? <option className='truncate' value={element}  key={Math.random() * (1000 - 1) + 1}>{`${element.slice(8,10)}/${element.slice(5,7)}/${element.slice(0,4)}`}</option> 
          : <option className='truncate' value={element}  key={Math.random() * (1000 - 1) + 1}>{element}</option> 
        ))}
      </select>
      {(consulta[consulta.indexOf(query) + 1] !== '' && typeof (consulta[consulta.indexOf(query) + 1]) !== 'undefined') ? <button className='w-52 filter-btn px-2 rounded-full truncate' value='None' onClick={handlerClick}>{button_label(query, consulta)} <i className='ms-1 bi bi-x-circle'></i></button> : <div></div>}      
    </div>
  )
}

export default React.memo(Filter)
