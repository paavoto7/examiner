import { useState } from "react"
import DeleteButton from "./DeleteButton"

const ImageProblem = ({ number, lines, image, deleteProblem }) => {
    const [lineAmount, setLineAmount] = useState(lines)

   // const linesToPrint = 

    return (
        <div>
            <h2 contentEditable suppressContentEditableWarning="true">Problem {number}</h2>
            <DeleteButton deleteProblem={deleteProblem} order={number} />
            <div className="imageDisplay">
                <img src={URL.createObjectURL(image)} width="100%" height="100%" />
            </div>
            <p contentEditable className="wrap">{"_".repeat(lineAmount)}</p>
            <input style={{width:"40%"}} type="range" min={1} max={1000} value={lineAmount} onChange={e => setLineAmount(e.currentTarget.value)} />
        </div>
    )
}

export default ImageProblem