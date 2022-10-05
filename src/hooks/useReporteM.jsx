import { useState, useContext, useEffect } from 'react'
import Context from '../context/ReporteMContext'
import { getReportes } from '../services/fetching'

export function useReporteM () {
  const {data, setData, consulta, setConsulta, url, setUrl} = useContext(Context)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    if(url){
      getReportes(url)
        .then(result => {
          result.map(el => {
            el['fecha'] = `${el.trabajado.slice(8,10)}/${el.trabajado.slice(5,7)}/${el.trabajado.slice(0,4)}`
            el['status'] = el.estatus <= 1 ? 'PENDIENTE' : el.estatus === 2 ? 'ACEPTADO' : 'RECHAZADO'
            return null
          })
          setData(result)
        })
      setLoading(false)
    }
  }, [setUrl, url, setData])

  return {data, setData, consulta, setConsulta, url, setUrl, loading}
}