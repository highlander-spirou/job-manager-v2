import { createContext, useContext } from "react"

interface RepositoryInterface {}

const dataRepoContext = createContext<null | RepositoryInterface>(
  null
)

export const DataRepositoryProvider = ({ children }) => {
  return (
    <dataRepoContext.Provider value={{}}>
      {children}
    </dataRepoContext.Provider>
  )
}

export const useDataRepository = () => {
  const context = useContext(dataRepoContext)
  if (!context) {
    throw new Error(
      "useDataRepository must be use within DataRepositoryProvider"
    )
  }
  return context
}
