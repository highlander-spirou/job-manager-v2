import MonthlyCalenderView from "@custom-ui/monthly-calender-view"
import Notification from "@custom-ui/notification"
import { InfoIcon } from "lucide-react"

function App() {
  Notification
  return (
    <>
      <div className="bg-zinc-100 h-screen w-screen">
        <div className="w-full grid place-items-center px-10 py-5">
          <div className="mt-5">
            <MonthlyCalenderView />
          </div>
          <div className="mt-2">
            <Notification />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
