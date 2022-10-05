import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './pages/Home'
import Reporte from './pages/Reporte'
import { Route } from 'wouter'
import { GlobalContextProvider } from './context/GlobalContext'

function App() {
  return (
    <div className='mt-20 mb-5'>
      <GlobalContextProvider>
        <Route component={Home} path='/' />
        <Route component={Reporte} path='/reporte-actividades' />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
