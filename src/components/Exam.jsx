import { useState, useRef } from "react"
import Togglable from "./Togglable"
import NewProblem from "./NewProblem"
import Problem from "./Problem"

const Exam = ({ printForm }) => {
    const [problems, setProblems] = useState([])

    const visibilityRef = useRef()

    const addProblem = (amount, image) => {
        visibilityRef.current.toggleVisibility()
        const problem = {
            order: problems.length+1,
            amount,
            image
        }
        setProblems(problems.concat(problem))
    }

    const deleteProblem = (order) => setProblems(
        problems.filter(problem => problem.order !== order))

    return (
        <>
            <Togglable ref={visibilityRef} buttonLabel="New problem">
                <NewProblem addProblem={addProblem} />
            </Togglable>

            {problems.map(problem => 
            <Problem key={problem.order} number={problem.order} lines={problem.amount} image={problem.image} deleteProblem={deleteProblem} />
            )}
            
            <button className="printButton" onClick={printForm}>
                <span className="material-symbols-outlined">print</span>
            </button>
        </>
    )
}

export default Exam