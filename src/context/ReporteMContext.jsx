import React, { useState } from 'react'
import { url_reportesm } from '../helpers/reporte_data'
import { reporte_data } from '../helpers/reporte_data'
const Context = React.createContext({})

export function ReporteMContextProvider ({children}) {
  const [data, setData] = useState(reporte_data)
  const [consulta, setConsulta] = useState(['contratista_nombre_comercial', '', 'Proyecto', '', 'documento', '', 'estatus', '', 'comentarios', '',
                                            'comentarios_bmt', '', 'trabajado', '', 'trabajado_por', ''])
  const [url, setUrl] = useState(url_reportesm)

  return(
    <Context.Provider value={{data, setData, consulta, setConsulta, url, setUrl}}>
      {children}
    </Context.Provider>
  )
}

export default Context