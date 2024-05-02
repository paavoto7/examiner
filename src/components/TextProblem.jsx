import { useState } from "react"
import DeleteButton from "./DeleteButton"

const TextProblem = ({ number, lines, deleteProblem }) => {
    const [lineAmount, setLineAmount] = useState(lines)

    return (
        <div>
            <h2 contentEditable suppressContentEditableWarning="true">Problem {number}</h2>
            <DeleteButton deleteProblem={deleteProblem} order={number} />
            
            <p contentEditable className="wrap">{"_".repeat(lineAmount)}</p>
            <input style={{width:"40%"}} type="range" min={1} max={1000} value={lineAmount} onChange={e => setLineAmount(e.currentTarget.value)} />
        </div>
    )
}

export default TextProblem