import Context from '../context/GlobalContext'
import { useContext } from 'react'

export function useGlobal() {
  const {status, setStatus} = useContext(Context)

  return { status, setStatus }
}