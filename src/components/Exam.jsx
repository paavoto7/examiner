import { useState, useRef } from "react"
import TextProblem from "./TextProblem"
import ImageProblem from "./ImageProblem"
import Togglable from "./Togglable"
import NewProblem from "./NewProblem"

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

    return (
        <>
        <div>
            <Togglable ref={visibilityRef} buttonLabel="New problem">
                <NewProblem addProblem={addProblem} />
            </Togglable>

            {problems.map(problem => 
            problem.image
            ? <ImageProblem key={problem.order} number={problem.order} lines={problem.amount} image={problem.image} />
            : <TextProblem key={problem.order} number={problem.order} lines={problem.amount} />)}
            
            <button style={{float:"left",position: "absolute", bottom: "10%"}} onClick={printForm}>Print</button>
        </div>
        </>
    )
}

export default Exam