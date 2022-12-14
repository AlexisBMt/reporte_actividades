import React, { useState } from 'react'
const Context = React.createContext({})

export function GlobalContextProvider ({children}) {
  const [status, setStatus] = useState(0)

  return(
    <Context.Provider value={{status, setStatus}}>
      {children}
    </Context.Provider>
  )
}

export default Context