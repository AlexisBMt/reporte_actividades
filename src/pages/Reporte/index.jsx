import ListaReportes from '../../components/ListaReportes/ListaReportes'
import ListaReportesM from '../../components/ListaReportes/ListaReportesM'
import ListaReportesJ from '../../components/ListaReportes/ListaReportesJ'
import Grafica from '../../components/Grafica'
import Navegation from '../../components/Navegation/index'
import { ReporteContextProvider } from '../../context/ReporteContext'
import { ReporteMContextProvider } from '../../context/ReporteMContext'
import { ReporteJContextProvider } from '../../context/ReporteJContext'
import { ChartContextProvider } from '../../context/ChartContext'
import { useGlobal } from '../../hooks/useGlobal'
import { Link } from 'wouter'

export default function Reporte () {
  const {status, setStatus} = useGlobal()
  const updateStatus = (newStatus) => setStatus(newStatus)

  return (
    <>
        <div className='bg-[#17376d] p-4 text-center'> <h1 className='text-white font-bold text-2xl'>Reporte de Actividades</h1> </div>
        {/* Breadcumbs */}
        <nav className="flex bg-gray-200 px-5 py-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-md font-semibold text-slate-500 hover:text-blue-900 dark:text-slate-500 dark:hover:text-blue-900">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </Link>
            </li>
            <li>
              <div className='flex items-center'>
                <svg className='w-6 h-6 text-slate-500' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
                <Link to="/reporte-actividades" className='ml-1 text-md font-semibold text-slate-500 hover:text-blue-900 md:ml-2 dark:text-slate-500 dark:hover:text-blue-900'>Projects</Link>
              </div>
            </li>
          </ol>
        </nav>

        <Navegation status={status} updateStatus={updateStatus} />
        { status === 0 ? <ReporteContextProvider><ListaReportes /></ReporteContextProvider> 
        : status === 1 ? <ReporteMContextProvider> <ListaReportesM /> </ReporteMContextProvider> 
        : status === 2 ? <ReporteJContextProvider> <ListaReportesJ /> </ReporteJContextProvider> 
        : <ChartContextProvider><Grafica /></ChartContextProvider>}
    </>
  )
}