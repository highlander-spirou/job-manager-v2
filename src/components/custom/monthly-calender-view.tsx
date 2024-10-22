import dayjs from "dayjs"
import { useEffect, useState } from "react"
import range from "lodash-es/range"
import { cn } from "@/lib/utils"
import { TriangleIcon } from "lucide-react"
import { data } from "@/assets/data"
import { Button } from "../ui/button"

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const todayObj = dayjs()

const MonthlyCalenderView = () => {
  const [dayObj, setDayObj] = useState(dayjs())

  const thisYear = dayObj.year()
  const thisMonth = dayObj.month() // (January as 0, December as 11)
  const daysInMonth = dayObj.daysInMonth()

  const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`)
  const [selection, setSelection] = useState(1)

  const weekDayOf1 = dayObjOf1.day() // (Sunday as 0, Saturday as 6)

  const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`)
  const weekDayOfLast = dayObjOfLast.day()

  return (
    <>
      <div className="w-80 rounded-xl bg-white p-4">
        <div className="flex justify-between items-center px-3 mb-4">
          <h4>{dayObj.format("MMMM YYYY")}</h4>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="size-8">
              <TriangleIcon className="!size-3 stroke-gray-400 fill-gray-400" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8">
              <TriangleIcon className="rotate-180 !size-3 stroke-gray-400 fill-gray-400" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 place-items-center">
          {weekDays.map((d) => (
            <div className="text-sm text-gray-500 font-semibold" key={d}>
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-2 mt-3">
          {range(weekDayOf1).map((i) => (
            <div className="h-8 flex-center" key={i}>
              <span className="text-gray-300 text-normal mb-3">
                {dayObjOf1.subtract(weekDayOf1 - i, "day").date()}
              </span>
            </div>
          ))}
          {range(daysInMonth).map((i) => (
            <button
              className={cn(
                "h-8 flex flex-col items-center",
                selection === i + 1 ? "border border-blue-600 rounded-md bg-slate-100" : ""
              )}
              key={i}
              onClick={() => setSelection(i + 1)}
            >
              <span
                className={cn(
                  "leading-none",
                  i + 1 === todayObj.date() &&
                    thisMonth === todayObj.month() &&
                    thisYear === todayObj.year()
                    ? "font-bold text-blue-600"
                    : ""
                )}
              >
                {i + 1}
              </span>
              <div className="h-4">
                {data[i + 1] && (
                  <div className="flex gap-1 h-full">
                    {data[i + 1].late && (
                      <p className="text-red-500 leading-none">•</p>
                    )}
                    {data[i + 1].urgent && (
                      <p className="text-yellow-300 leading-none">•</p>
                    )}
                    {data[i + 1].calm && (
                      <p className="text-green-500 leading-none">•</p>
                    )}
                  </div>
                )}
              </div>
            </button>
          ))}
          {range(6 - weekDayOfLast).map((i) => (
            <div className="h-8 flex-center" key={i}>
              <span className="text-gray-300 text-normal mb-4">
                {dayObjOfLast.add(i + 1, "day").date()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MonthlyCalenderView
