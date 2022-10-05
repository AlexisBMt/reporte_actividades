import React, { useState } from 'react'
import { useReporteM } from '../../hooks/useReporteM'
import { url_reportesm } from '../../helpers/reporte_data'
import { url_reportesm_periodo } from '../../helpers/reporte_data'
import DataTable from 'react-data-table-component'
import Spinner from '../Spinner/index'
import Filter from '../Filter/index'

const columns = [
  { name: 'CONTRATISTA', selector: row => row.contratista_nombre_comercial, sortable: true },
  { name: 'PROYECTO', selector: row => row.Proyecto, sortable: true },
  { name: 'DOCUMENTO', selector: row => row.documento, sortable: true },
  { name: 'ESTATUS', selector: row => row.status, sortable: true },
  { name: 'TRABAJADO', selector: row => row.fecha, sortable: true },
  { name: 'TRABAJADO POR', selector: row => row.trabajado_por, sortable: true },
  { name: 'COMENTARIOS', selector: row => row.comentarios, sortable: true },
  { name: 'COMENTARIOS BMT', selector: row => row.comentarios_bmt, sortable: true }
]

const customStyles = {
  rows: {
    style: {
      textalign: 'center',
      fontsize: '0.875rem',
      lineheight: '1.25rem'
    },
  },
  headCells: {
    style: {
      textalign: 'center',
      fontsize: '0.875rem',
      lineheight: '1.25rem'
    },
  },
  cells: {
    style: {
      width: '13rem'
    }
  }
}

function ListaReportesM() {
  const {data, consulta, setConsulta, setUrl, loading} = useReporteM()
  const [fechas, setFechas] = useState(['', ''])

  //Filter Data
  const consultaQuery = (consultaq) => setConsulta(consultaq) 
  const updateUrl = (update_url) => setUrl(update_url)

  const handlerClick = (event) => {
    event.preventDefault()
    setFechas(fechas[0] = document.getElementById('input1').value)
    setFechas(fechas[1] = document.getElementById('input2').value)
    setUrl(`${url_reportesm_periodo}/q=${fechas[1]},${fechas[0]}`)
    document.getElementById('input1').value = '' 
    document.getElementById('input2').value = ''
    setFechas(['', ''])
  }

  return(
    <>
      { loading ? <Spinner /> : <div></div> }
      <div className='p-5 bg-gray-100'>
        <div className='bg-[#17376d] rounded-md py-2 mb-4'>
          <form className='mt-4 px-5 text-end'>
            <h1 className='font-semibold text-xl text-white mb-4'>Busqueda por Periodo</h1>
            <label className='text-slate-200 text-md font-semibold mx-4 align-bottom'>DESDE:</label>
            <input className='text-sm border-2 border-white rounded py-1 px-4 text-gray-700 focus:outline-none focus:border-blue-700' id='input1' type='date' placeholder='Fecha de Inicio'/>
            <label className='text-slate-200 text-md font-semibold mx-4 align-bottom'>HASTA:</label>
            <input className='text-sm border-2 border-white rounded py-1 px-4 text-gray-700 focus:outline-none focus:border-blue-700' id='input2' type='date' placeholder='Fecha de Fin'/>
            <button className='px-4 py-1 bg-blue-600 text-white rounded-md ml-4 hover:bg-blue-700' onClick={handlerClick}>Search</button>
          </form>

          <h1 className='mx-3 font-semibold text-xl text-white mb-4'>Busqueda por Filtro</h1>
          <table className='block'>
              <thead className='text-sm font-medium text-slate-200'>
                <tr>
                  <th>CONTRATISTA</th>
                  <th>PROYECTO</th>
                  <th>DOCUMENTO</th>
                  <th>ESTATUS </th>
                  <th>TRABAJADO</th>
                </tr>

                <tr className='text-slate-700'>
                  <th> {data.length === 1 ? null : <Filter query='contratista_nombre_comercial' datos={ data } consultaQuery={consultaQuery} updateUrl={updateUrl} url={url_reportesm} consulta={consulta}/>} </th>
                  <th> {data.length === 1 ? null : <Filter query='Proyecto' datos={ data } consultaQuery={consultaQuery} updateUrl={updateUrl} url={url_reportesm} consulta={consulta}/>} </th>
                  <th> {data.length === 1 ? null : <Filter query='documento' datos={ data } consultaQuery={consultaQuery} updateUrl={updateUrl} url={url_reportesm} consulta={consulta}/>} </th>
                  <th> {data.length === 1 ? null : <Filter query='estatus' datos={ data } consultaQuery={consultaQuery} updateUrl={updateUrl} url={url_reportesm} consulta={consulta}/>} </th>
                  <th> {data.length === 1 ? null : <Filter query='trabajado' datos={ data } consultaQuery={consultaQuery} updateUrl={updateUrl} url={url_reportesm} consulta={consulta}/>} </th>
                </tr>
              </thead>
          </table>
        </div>

        <DataTable columns={columns} data={data} pagination striped customStyles={customStyles}/>
      </div>
    </>
  )
}

export default React.memo(ListaReportesM)
