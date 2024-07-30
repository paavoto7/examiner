import { useState } from "react"

const NewProblem = ({ addProblem }) => {
    const [line, setLine] = useState(10)
    const [image, setImage] = useState(null)

    const handleAddProblem = (e) => {
        e.preventDefault()
        e.target.reset()
        addProblem(Number(line), image)
        setLine(10)
        setImage(null)
    }

    return (
        <form className="newProblem flexComponent" onSubmit={handleAddProblem}>
            <div>
                <label htmlFor="lineAmount">How many lines? </label>
                <input value={line} id="lineAmount" type="number" onChange={e => setLine(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="addImage">Add an image </label>
                <input id="addImage" type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
            </div>
            <button className="submitButton" type="submit">Add</button>
        </form>
    )
}

export default NewProblem