import { Outlet } from "react-router-dom"

const RootLayout = () => {
	return (
		<>
			<div className="restrict-content-grow h-screen w-screen bg-zinc-100">
        <Outlet />
      </div>
		</>
	)
}

export default RootLayout
