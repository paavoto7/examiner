import { useState } from "react"
import Exam from "./components/Exam"
import Menu from "./components/Menu"

const App = () => {

	const printForm = (event) => {
		event.preventDefault()
		const toPrint = document.getElementsByClassName("Exam")
		window.print(toPrint)
	}

	return (
		<div>
			<div className="header">
				<h1>Hello world</h1>
			</div>
			<div className="Exam">
				<Exam printForm={printForm} />
			</div>
			<div className="Menu">
				<Menu  />
			</div>
		</div>
	)
}

export default App