import { useState } from "react"

const NewProblem = ({ addProblem }) => {
    const [line, setLine] = useState(0)

    return (
        <div>
            <label htmlFor="lineAmount">How many lines?</label>
            <input value={line} name="lineAmount" type="number" onChange={(e) => setLine(e.target.value)}/>
            <button onClick={() => addProblem(line)} type="button">Add</button>
        </div>
    )
}

export default NewProblem