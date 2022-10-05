import Context from '../context/ChartContext'
import { useContext, useEffect, useState } from 'react'
import { url_global_chart, url_bar_chart, url_documents_chart } from '../helpers/reporte_data'
import { getReportes } from '../services/fetching'

export function useChart() {
  const {dataChart, setDataChart, chartDate, setChartDate, barChart, setBarChart, docChart, setDocChart, url, setUrl, status, setStatus} = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [load, setLoad] = useState(false)

  useEffect( () => {
    setLoading(true)
    getReportes(url_global_chart)
      .then(result => {
        setDataChart(result)
        setLoading(false)
      })
  }, [setDataChart]);

  useEffect(() => {
    setLoading1(true)
    getReportes(url_bar_chart)
      .then(result => {
        setBarChart(result)
        setLoading1(false)
      })
  }, [setBarChart])

  useEffect(() => {
    setLoading2(true)
    getReportes(url_documents_chart)
      .then(result => {
        setDocChart(result)
        setLoading2(false)
      })
  }, [setDocChart])

  useEffect(() => {
    if(url !== ''){
      setLoad(true)
      getReportes(url)
        .then(result => {
          setChartDate(result)
          setLoad(false)
        })
    }
  }, [setChartDate, url])


  return { dataChart, setDataChart, chartDate, setChartDate, barChart, setBarChart, docChart, setDocChart, url, setUrl, status, setStatus, loading, setLoading, load, setLoad, loading1, setLoading1, loading2, setLoading2 }
}