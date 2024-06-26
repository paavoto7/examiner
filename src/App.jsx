import { useState, useRef } from "react"
import Togglable from "./components/Togglable"
import NewProblem from "./components/NewProblem"
import Problem from "./components/Problem"

const App = () => {
    const [problems, setProblems] = useState([])

    const visibilityRef = useRef()

    const printForm = (event) => {
		event.preventDefault()
		const toPrint = document.getElementsByClassName("Exam")
		window.print(toPrint)
    }

    const addProblem = (amount, image) => {
        visibilityRef.current.toggleVisibility()
        const order = problems.length+1
        const problem = {
            order,
            amount,
            image,
            header: `Problem ${order}`,
            index: problems.length
        }
        setProblems(problems.concat(problem))
    }

    const switchPlaces = (orderOne, orderTwo) => {
        if (orderOne === orderTwo) return
        setProblems(problems => {
            let data = [...problems]
            let temp = {...data[orderOne], index: orderTwo}
            data[orderOne] = {...data[orderTwo], index: orderOne}
            data[orderTwo] = temp
            return data
        })
    }
    

    const deleteProblem = (order) => setProblems(
        problems.filter(problem => problem.order !== order))
    
    const changeLineAmount = (order, amount) => 
        setProblems(problems.map( 
            problem => {return problem.order === order
            ? {...problem, amount: Number(amount)}
            : problem}
        ))

    return (
        <div className="Exam flexComponent">
            <Togglable ref={visibilityRef} buttonLabel="New problem">
                <NewProblem addProblem={addProblem} />
            </Togglable>

            {problems.map(problem => 
            <Problem
                key={problem.order}
                problem={problem}
                deleteProblem={deleteProblem}
                switchProblem={switchPlaces}
                changeLineAmount={changeLineAmount}
                problems={problems.length}
            />
            )}
            
            <button className="printBtn iconBtn" onClick={printForm}>
                <span style={{ fontSize: "40px" }} className="material-symbols-outlined">print</span>
                <span style={{fontSize: "20px"}}>Print</span>
            </button>
        </div>
    )
}

export default App