import dayjs from "dayjs"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card"
import { ScrollArea } from "../ui/scroll-area"
import LateIcon from "@/assets/icons/late.svg"
import { Button } from "../ui/button"
import { FileX2Icon } from "lucide-react"

const ScheduleNotiItem = () => {
  return (
    <>
      <div className="flex justify-between items-center py-2 mb-2">
        <div className="flex items-center gap-2">
          <img src={LateIcon} className="size-6" />
          <HoverCard>
            <HoverCardTrigger>
              <button className="text-gray-800 font-semibold hover:underline hover:underline-offset-4">
                SOP-111.123.4567
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
              <div className="leading-relaxed text-sm">
                <p className="font-bold mb-1 text-base">SOP-111.123.4567</p>
                <p>
                  <span className="font-medium">Schedule Name: </span>
                  Họp hành
                </p>
                <div className="flex gap-1">
                  <p>
                    <span className="font-medium">Deadline: </span>
                    {dayjs().format("HH:mm a, ddd DD-MM")}
                  </p>
                  <p> • </p>
                  <p>
                    <span className="font-medium">Due in: </span>
                    <span className="text-red-500">20 minutes</span>
                  </p>
                </div>
                <p className="line-clamp-2">
                  <span className="font-medium">Schedule Details: </span>
                  <span className="text-gray-500">
                    The value that you want the context to have when there is no
                    matching context provider in the tree above the component
                    that reads context. If you don’t have any meaningful default
                    value, specify null. The default value is meant as a “last
                    resort” fallback. It is static and never changes over time.
                  </span>
                </p>
                <div className="flex justify-end">
                  <Button variant="link" className="text-blue-600">
                    View document
                  </Button>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <p className="text-sm">20 minutes left</p>
      </div>
    </>
  )
}

const DocExpireNotiItem = () => {
  return (
    <>
      <div className="flex justify-between items-center border-gray-300 py-2 mb-2">
        <div className="flex items-center gap-2">
          <FileX2Icon className="size-6 stroke-black" />
          <HoverCard>
            <HoverCardTrigger>
              <button className="text-gray-800 font-semibold hover:underline hover:underline-offset-4">
                SOP-112.000.5678
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
              <div className="leading-relaxed text-sm">
                <p className="font-bold mb-1 text-base">SOP-112.000.5678</p>
                <p>
                  <span className="font-medium">Expired in: </span>
                  {dayjs().format("dddd, DD-MM-YYYY")}
                </p>
                <div className="flex justify-end gap-2 mt-2">
                  <Button variant="outline">
                    Schedule appointment
                  </Button>
                  <Button variant="link" className="text-blue-600">
                    View document
                  </Button>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <p className="text-sm">20 minutes left</p>
      </div>
    </>
  )
}

const Notification = () => {
  return (
    <>
      <div className="rounded-xl bg-white p-3 w-80">
        <p className="text-sm text-gray-500 font-semibold mb-3">Notifications</p>
        <ScrollArea className="h-36">
          <ScheduleNotiItem />
          <DocExpireNotiItem />
          <ScheduleNotiItem />
          <DocExpireNotiItem />
          <ScheduleNotiItem />
          <DocExpireNotiItem />
        </ScrollArea>
      </div>
    </>
  )
}

export default Notification
