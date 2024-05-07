import { useState } from "react"
import Exam from "./components/Exam"

const App = () => {

	const printForm = (event) => {
		event.preventDefault()
		const toPrint = document.getElementsByClassName("Exam")
		window.print(toPrint)
	}

	return (
		<div>
			<div className="header">
				<h1>Examiner</h1>
			</div>
			<div className="Exam flexComponent">
				<Exam printForm={printForm} />
			</div>
		</div>
	)
}

export default App