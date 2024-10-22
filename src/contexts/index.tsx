import { createContext, useContext } from "react"

interface NotificationContextInterface {}

const notificationContext = createContext<null | NotificationContextInterface>(
  null
)

export const NotificationContextProvider = ({ children }) => {
  return (
    <notificationContext.Provider value={{}}>
      {children}
    </notificationContext.Provider>
  )
}

export const useNotificationCtx = () => {
  const context = useContext(notificationContext)
  if (!context) {
    throw new Error(
      "useNotificationCtx must be use within NotificationContextProvider"
    )
  }
  return context
}
