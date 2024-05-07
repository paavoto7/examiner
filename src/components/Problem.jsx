import { useState } from "react"
import Button from "./Button"
import Dropdown from "./Dropdown"

const Problem = ({ number, lines, image, deleteProblem }) => {
    const [lineAmount, setLineAmount] = useState(lines)
    const [lineHeight, setLineHeight] = useState(1)

    const changeLineHeight = height => {
        setLineHeight(height)
    }

    return (
        <div className="problem">
            <h2 contentEditable suppressContentEditableWarning>Problem {number}</h2>
            <Button funcToDo={deleteProblem} order={number} name="Delete" />
            <Dropdown handleChange={changeLineHeight} values={[1, 1.25, 1.5, 1.75, 2, 2.25]}/>

            {image &&
            <div className="imageDisplay">
                <img src={URL.createObjectURL(image)} width="100%" height="100%" />
            </div>}
            
            <p style={{lineHeight:lineHeight}} className="wrap">{"_".repeat(lineAmount)}</p>
            <input style={{width:"40%"}} type="range" min={1} max={1000} value={lineAmount} onChange={e => setLineAmount(e.currentTarget.value)} />
        </div>
    )
}

export default Problem