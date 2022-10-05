import React, { useState } from 'react'
const Context = React.createContext({})

export function ChartContextProvider ({children}) {
  const [dataChart, setDataChart] = useState([])
  const [chartDate, setChartDate] = useState([])
  const [barChart, setBarChart] = useState({})
  const [docChart, setDocChart] = useState({})
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState(false)

  return(
    <Context.Provider value={{dataChart, setDataChart, chartDate, setChartDate, barChart, setBarChart, docChart, setDocChart, url, setUrl, status, setStatus}}>
      {children}
    </Context.Provider>
  )
}

export default Context