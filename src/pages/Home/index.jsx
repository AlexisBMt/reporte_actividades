import { Link } from 'wouter' 

export default function Home () {

  return(
    <>
      <div className='bg-[#17376d] p-4 text-center'> <h1 className='text-white font-bold text-2xl'>BMTools Home</h1> </div>
      {/* Breadcumbs */}
      <nav className="flex bg-gray-200 px-5 py-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="inline-flex items-center text-md font-semibold text-slate-500 hover:text-blue-900 dark:text-slate-500 dark:hover:text-blue-900">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              Home
            </Link>
          </li>
        </ol>
      </nav>

      <Link to='/reporte-actividades'><button className='m-5 text-white bg-neutral-400 p-2 rounded-md hover:bg-neutral-500'>Reporte de Actividades</button></Link>
    </>
  )
 }