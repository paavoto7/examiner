import { useState } from "react"
import Button from "./Button"
import Dropdown from "./Dropdown"
import SwitchButton from "./SwitchButton"

const Problem = ({ problem, problems, deleteProblem, switchProblem, changeLineAmount }) => {
    const [lineAmount, setLineAmount] = useState(problem.amount)
    const [lineHeight, setLineHeight] = useState(1)

    const changeLineHeight = height => {
        setLineHeight(height)
    }
    
    const handleLineAmount = () => {
        console.log("now")
        changeLineAmount(problem.order, lineAmount)
    }

    return (
        <div className="problem">
            <h2 contentEditable suppressContentEditableWarning>{problem.header}</h2>

            <div className="buttonDiv">
                <Button funcToDo={deleteProblem} order={problem.order} name="Delete" icon="delete" />
                <SwitchButton funcToDo={switchProblem} index={problem.index} icon="swap_vert" problems={problems} />
                <Dropdown handleChange={changeLineHeight} values={[1, 1.25, 1.5, 1.75, 2, 2.25]} label="Line height: "/>
            </div>
            

            {problem.image &&
            <div className="imageDisplay">
                <img src={URL.createObjectURL(problem.image)} width="100%" height="100%" />
            </div>}
            
            <p style={{lineHeight:lineHeight}} className="wrap">{"_".repeat(lineAmount)}</p>
            <input
                style={{width:"40%"}}
                type="range"
                min={1}
                max={1000}
                value={lineAmount}
                onMouseUp={handleLineAmount}
                onChange={e => setLineAmount(Number(e.currentTarget.value))}
            />
        </div>
    )
}

export default Problem