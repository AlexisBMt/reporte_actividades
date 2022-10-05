import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import RingLoader from 'react-spinners/DotLoader'
import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { useChart } from '../../hooks/useChart'
import { url_global_chart } from '../../helpers/reporte_data'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title)

function Grafica () {
  const { dataChart, chartDate, barChart, docChart, setUrl, status, setStatus, loading, load, loading1, loading2 } = useChart()
  const [fechas, setFechas] = useState(['', ''])

  let data = {
    labels: ['Analista 1', 'Analista 2'],
    datasets: [
      {
        data: Object.keys(dataChart).length > 0 ? dataChart.total : [1, 1],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 2,
      },
    ],
  }

  let data2 = {
    labels: ['Analista 1', 'Analista 2'],
    datasets: [
      {
        data: chartDate.length > 0 ? chartDate : [1, 1],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 2,
      },
    ],
  }

  let data3 = {
    labels: ['Pendiente', 'Aceptado', 'Rechazado'],
    datasets: [
      {
        data: Object.keys(dataChart).length > 0 ? dataChart.status : [1, 1],
        backgroundColor: [
          'rgba(255, 255, 0, 0.2)',
          'rgba(0, 255, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 255, 0, 0.7)',
          'rgba(0, 255, 0, 0.7)',
          'rgba(255, 0, 0, 0.7)'
        ],
        borderWidth: 2,
      },
    ],
  }

  let barData = {
    labels: ['Total', 'Analista 1', 'Analista 2'],
    datasets: [
      {
        label: 'Pendiente',
        data: Object.keys(barChart).length > 0 ? barChart.pendiente : [1, 1, 1],
        backgroundColor: 'rgba(255, 255, 0, 0.2)',
        borderColor: 'rgba(255, 255, 0, 0.7)',
        borderWidth: 2,
      }, 
      {
        label: 'Aceptado',
        data: Object.keys(barChart).length > 0 ? barChart.aceptado : [1, 1, 1],
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderColor: 'rgba(0, 255, 0, 0.7)',
        borderWidth: 2
      },
      {
        label: 'Rechazad0',
        data: Object.keys(barChart).length > 0 ? barChart.rechazado : [1, 1, 1],
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'rgba(255, 0, 0, 0.7)',
        borderWidth: 2
      }
    ]
  }

  let docData = {
    labels: ['Total', 'Analista 1', 'Analista 2'],
    datasets: [
      {
        label: 'SIPARE',
        data: Object.keys(docChart).length > 0 ? docChart.sipare : [1, 1, 1],
        backgroundColor: 'rgba(40, 152, 111, 0.4)',
        borderColor: 'rgba(40, 152, 111, 0.8)',
        borderWidth: 2,
      }, 
      {
        label: 'Comprobante pago SUA',
        data: Object.keys(docChart).length > 0 ? docChart.comprobante : [1, 1, 1],
        backgroundColor: 'rgba(23, 171, 153, 0.4)',
        borderColor: 'rgba(23, 171, 153, 0.8)',
        borderWidth: 2
      },
      {
        label: 'Reporte Gral. de Registro de Obra',
        data: Object.keys(docChart).length > 0 ? docChart.reporte : [1, 1, 1],
        backgroundColor: 'rgba(60, 153, 180 , 0.4)',
        borderColor: 'rgba(60, 153, 180, 0.8)',
        borderWidth: 2
      },
      {
        label: 'Archivo SUA',
        data: Object.keys(docChart).length > 0 ? docChart.sua : [1, 1, 1],
        backgroundColor: 'rgba(116, 167, 121 , 0.4)',
        borderColor: 'rgba(116, 167, 121, 0.8)',
        borderWidth: 2
      },
      {
        label: 'Nominas',
        data: Object.keys(docChart).length > 0 ? docChart.nominas : [1, 1, 1],
        backgroundColor: 'rgba(255, 139, 42, 0.4)',
        borderColor: 'rgba(255, 139, 42, 0.8)',
        borderWidth: 2
      }
    ]
  }

  const handlerClick = (event) => {
    event.preventDefault()
    setFechas(fechas[0] = document.getElementById('input1').value)
    setFechas(fechas[1] = document.getElementById('input2').value)
    setUrl(`${url_global_chart}/q=${fechas[1]},${fechas[0]}`)
    setStatus(true)
    document.getElementById('input1').value = '' 
    document.getElementById('input2').value = ''
    setFechas(['', ''])
  }

  return (
    <>
      <section className='bg-[#17376d] pb-16 pt-8'>
        <h1 className='text-center py-5 text-3xl text-slate-200 font-semibold mb-10'>Reporte de Actividades Graficas</h1>

        <div className='flex my-5'>
          {/* //Grafica global */}
          <section className='w-4/12 mx-10 bg-white p-10 rounded-xl'>
            {loading || Object.keys(dataChart).length < 1 ? <div className='w-10/12 mx-10 bg-white p-10 rounded-xl'> <div className='mx-auto'><RingLoader color='#1B50AA' size={350}/></div></div>
              :<div className='w-10/12 mx-auto'>
                <h1 className='text-center mb-5 text-2xl text-sky-500'>Grafica Global</h1>
                <div className='text-center'>
                  <p className='inline mx-2 font-semibold text-[#17376d]'>{`Total: ${dataChart.total[0] + dataChart.total[1]}`}</p>
                  <p className='inline mx-2 text-blue-400'>{`Analista 1: ${dataChart.total[0]}`}</p>
                  <p className='inline mx-2 text-red-400'>{`Analista 2: ${dataChart.total[1]}`}</p>
                </div>
                <Pie data={data} />
              </div>
            }
          </section>

          {/* //Formulario para obtener grafica por periodo  */}
          <form className='mt-2 px-5 py-6 w-4/12 text-center'>
            <h1 className='font-semibold text-xl text-white mb-5'>Graficar por periodo</h1>
            <label className='text-slate-200 text-md font-semibold mr-4 align-bottom'>DESDE:</label>
            <input className='text-sm border-2 border-white rounded py-1 px-5 text-gray-700 focus:outline-none focus:border-blue-700' id='input1' type='date'/>
            <label className='text-slate-200 text-md font-semibold mx-4 align-bottom'>HASTA:</label>
            <input className='text-sm border-2 border-white rounded py-1 px-5 text-gray-700 focus:outline-none focus:border-blue-700' id='input2' type='date'/>
            <button className='w-10/12 text-md block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 my-4 mx-auto' onClick={handlerClick}>Graficar</button>
          </form>

          {/* Grafica por periodo */}
          {status ? 
          <div className='w-4/12 mx-10 bg-white p-10 rounded-xl'>
            {load ? <div className='w-10/12 mx-10 bg-white p-10 rounded-xl'> <div className='mx-auto'><RingLoader color='#1B50AA' size={350}/></div></div> 
              :<div className='w-10/12 mx-auto'>
                <h1 className='text-center mb-5 text-2xl text-sky-500'>Grafica por Periodo</h1>
                <div className='text-center'>
                  <p className='inline mx-2 font-semibold text-[#17376d]'>{`Total: ${chartDate[0] + chartDate[1]}`}</p>
                  <p className='inline mx-2 text-blue-400'>{`Analista 1: ${chartDate[0]}`}</p>
                  <p className='inline mx-2 text-red-400'>{`Analista 2: ${chartDate[1]}`}</p>
                </div>
                <Pie data={data2} />
              </div>
            }
          </div> 
          : <div></div>}

        </div>
        
        <div className='flex my-5'>
          {/* //Grafica Status Global */}
          <section className='w-4/12 mx-10 bg-white p-10 rounded-xl'>
              {loading || Object.keys(dataChart).length < 1 ? <div className='w-4/12 mx-10 bg-white p-10 rounded-xl'> <div className='mx-auto'><RingLoader color='#1B50AA' size={350}/></div></div>
                :<div className='w-10/12 mx-auto'>
                  <h1 className='text-center mb-5 text-2xl text-sky-500'>Grafica Total Estatus</h1>
                  <div className='text-center'>
                    <p className='mx-2 font-semibold text-[#17376d]'>{`Total: ${dataChart.status[0] + dataChart.status[1] + dataChart.status[2]}`}</p>
                    <p className='inline mx-2 text-yellow-400'>{`Pendiente: ${dataChart.status[0]}`}</p>
                    <p className='inline mx-2 text-green-400'>{`Aceptado: ${dataChart.status[1]}`}</p>
                    <p className='inline mx-2 text-red-400'>{`Rechazado: ${dataChart.status[2]}`}</p>
                  </div>
                  <Pie data={data3} />
                </div>
              }
          </section>

          {/* //Grafica Comparacion status     */}
          <section className='w-7/12 mx-10 bg-white p-10 rounded-xl'>
              {loading1 || Object.keys(barChart).length < 1 ? <div className='w-4/12 mx-auto bg-white p-10 rounded-xl'> <div className='mx-auto'><RingLoader color='#1B50AA' size={350}/></div></div>
                :<div className='mx-auto'>
                  <h1 className='text-center mb-5 text-2xl text-sky-500'>Grafica Comparacion de Estatus</h1>
                  <div className='text-center'>
                    <p className='inline mx-2 text-yellow-400'>{`Total: ${barChart.pendiente[0]}`}</p>
                    <p className='inline mx-2 text-yellow-400'>{`Analista 1: ${barChart.pendiente[1]}`}</p>
                    <p className='inline mx-2 text-yellow-400'>{`Analista 2: ${barChart.pendiente[2]}`}</p>
                  </div>
                  <div className='text-center'>
                    <p className='inline mx-2 text-green-400'>{`Total: ${barChart.aceptado[0]}`}</p>
                    <p className='inline mx-2 text-green-400'>{`Analista 1: ${barChart.aceptado[1]}`}</p>
                    <p className='inline mx-2 text-green-400'>{`Analista 2: ${barChart.aceptado[2]}`}</p>
                  </div>
                  <div className='text-center'>
                    <p className='inline mx-2 text-red-400'>{`Total: ${barChart.rechazado[0]}`}</p>
                    <p className='inline mx-2 text-red-400'>{`Analista 1: ${barChart.rechazado[1]}`}</p>
                    <p className='inline mx-2 text-red-400'>{`Analista 2: ${barChart.rechazado[2]}`}</p>
                  </div>
                  <Bar data={barData} />
                </div>
              }
          </section>
        </div>

        {/* //Grafica Comparacion Documentos       */}
        <div className='flex my-5'>
          <section className='w-full mx-10 bg-white p-10 rounded-xl'>
              {loading2 || Object.keys(docChart).length < 1 ? <div className='w-4/12 mx-auto bg-white p-10 rounded-xl'> <div className='mx-auto'><RingLoader color='#1B50AA' size={350}/></div></div>
                :<div className=' w-8/12 mx-auto'>
                  <h1 className='text-center mb-5 text-2xl text-sky-500'>Grafica Comparacion de Documentos</h1>
                  <div className='text-center'>
                    <p className='inline mx-2 text-[#28986FCC]'>{`Total: ${docChart.sipare[0]}`}</p>
                    <p className='inline mx-2 text-[#28986FCC]'>{`Analista 1: ${docChart.sipare[1]}`}</p>
                    <p className='inline mx-2 text-[#28986FCC]'>{`Analista 2: ${docChart.sipare[2]}`}</p>
                  </div>
                  <div className='text-center'>
                    <p className='inline mx-2 text-[#17AB99CC]'>{`Total: ${docChart.comprobante[0]}`}</p>
                    <p className='inline mx-2 text-[#17AB99CC]'>{`Analista 1: ${docChart.comprobante[1]}`}</p>
                    <p className='inline mx-2 text-[#17AB99CC]'>{`Analista 2: ${docChart.comprobante[2]}`}</p>
                  </div>
                  <div className='text-center'>
                    <p className='inline mx-2 text-[#3C99B4CC]'>{`Total: ${docChart.reporte[0]}`}</p>
                    <p className='inline mx-2 text-[#3C99B4CC]'>{`Analista 1: ${docChart.reporte[1]}`}</p>
                    <p className='inline mx-2 text-[#3C99B4CC]'>{`Analista 2: ${docChart.reporte[2]}`}</p>
                  </div>
                  <div className='text-center'>
                    <p className='inline mx-2 text-[#74A779CC]'>{`Total: ${docChart.sua[0]}`}</p>
                    <p className='inline mx-2 text-[#74A779CC]'>{`Analista 1: ${docChart.sua[1]}`}</p>
                    <p className='inline mx-2 text-[#74A779CC]'>{`Analista 2: ${docChart.sua[2]}`}</p>
                  </div>
                  <div className='text-center'>
                    <p className='inline mx-2 text-[#FF8B2ACC]'>{`Total: ${docChart.nominas[0]}`}</p>
                    <p className='inline mx-2 text-[#FF8B2ACC]'>{`Analista 1: ${docChart.nominas[1]}`}</p>
                    <p className='inline mx-2 text-[#FF8B2ACC]'>{`Analista 2: ${docChart.nominas[2]}`}</p>
                  </div>
                  <Bar data={docData} />
                </div>
              }
          </section>
        </div>

      </section>
    </>
  )
}

export default React.memo(Grafica)