import MonthlyCalenderView from "@custom-ui/monthly-calender-view"
import Notification from "@custom-ui/notification"
import dayjs from "dayjs"
import { FolderIcon } from "lucide-react"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card"

const CalenderView = () => {
	return (
		<>
			<div className="grid">
				<MonthlyCalenderView />
				<Notification />
			</div>
		</>
	)
}

const DocumentHeader = () => {
	return (
		<>
			<div className="grid grid-cols-[auto_200px_288px_200px] h-12 border-b pb-2">
				<div className="font-bold">Name</div>
				<div className="font-bold">Expired Date</div>
				<div className="font-bold">Location</div>
				<div className="font-bold">Tags</div>
			</div>
		</>
	)
}

const TagPopup = () => {
	return (
		<>
			<HoverCard openDelay={0} closeDelay={0}>
				<HoverCardTrigger>
					<div className="flex gap-2 items-center">
						<FolderIcon className="size-4 fill-gray-600" /> 2020 Standard
					</div>
				</HoverCardTrigger>
				<HoverCardContent sideOffset={-20} asChild>
					<div className="rounded-full bg-blue-50">
						QC 
					</div>
				</HoverCardContent>
			</HoverCard>
		</>
	)
}

const DocumentRow = () => {
	return (
		<>
			<div className="grid grid-cols-[auto_200px_288px_200px] items-center h-12 border-b">
				<div className="font-bold">SOP 111.1334.22</div>
				<div>{dayjs().format("ddd, DD/MM/YYYY")}</div>
				<TagPopup />
				<div className="flex gap-1">
					<span>tag 1</span>
					<span>tag 2</span>
					<span>tag 3</span>
				</div>
			</div>
		</>
	)
}

const DocumentView = () => {
	return (
		<>
			<div className="">
				<h3>Recent Documents</h3>
				<div className="w-full max-h-[340px] mt-5">
					<DocumentHeader />
					<DocumentRow />
					<DocumentRow />
					<DocumentRow />
					<DocumentRow />
					<DocumentRow />
					<DocumentRow />
					<DocumentRow />
				</div>
			</div>
		</>
	)
}

function App() {
	return (
		<>
			<div className="w-full h-full grid grid-cols-[auto_320px] p-5">
				<DocumentView />
				<div>
					<CalenderView />
				</div>
			</div>
		</>
	)
}

export default App
