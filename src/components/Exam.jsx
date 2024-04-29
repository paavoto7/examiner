import { useState } from "react"
import Problem from "./Problem"

const Exam = ({ printForm }) => {
    const [problems, setProblems] = useState([])

    const addProblem = (event) => {
        setProblems(problems.concat(problems.length+1))
    }

    return (
        <form onSubmit={printForm}>
            <button onClick={addProblem} type="button">Add problem</button>
            
                {problems.map(number => <Problem number={number} />)}
            
            <button style={{float:"left",position: "absolute", bottom: "10%"}} type="submit">Print</button>
        </form>
    )
}

export default Exam