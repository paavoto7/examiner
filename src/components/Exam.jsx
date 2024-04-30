import { useState, useRef } from "react"
import Problem from "./Problem"
import Togglable from "./Togglable"
import NewProblem from "./NewProblem"

const Exam = ({ printForm }) => {
    const [problems, setProblems] = useState([])

    const visibilityRef = useRef()

    const addProblem = (amount) => {
        visibilityRef.current.toggleVisibility()
        const problem = {
            order: problems.length+1,
            amount
        }
        setProblems(problems.concat(problem))
    }

    return (
        <>
        <form onSubmit={printForm}>
            <Togglable ref={visibilityRef} buttonLabel="New problem">
                <NewProblem addProblem={addProblem} />
            </Togglable>

            {problems.map(problem => <Problem key={problem.order} number={problem.order} lines={problem.amount} />)}
            
            <button style={{float:"left",position: "absolute", bottom: "10%"}} type="submit">Print</button>
        </form>
        </>
    )
}

export default Exam