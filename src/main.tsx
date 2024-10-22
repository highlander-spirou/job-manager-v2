import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { NotificationContextProvider } from "./contexts/index.tsx"
import { DataRepositoryProvider } from "./contexts/dataRepository.tsx"

createRoot(document.getElementById("root")!).render(
  <DataRepositoryProvider>
    <NotificationContextProvider>
      <App />
    </NotificationContextProvider>
  </DataRepositoryProvider>
)
