import { useState } from "react"

const NewProblem = ({ addProblem }) => {
    const [line, setLine] = useState(10)
    const [image, setImage] = useState(null)

    const handleAddProblem = (e) => {
        e.preventDefault()
        e.target.reset()
        addProblem(line, image)
        setLine(10)
        setImage(null)
    }

    return (
        <form onSubmit={handleAddProblem}>
            <label htmlFor="lineAmount">How many lines?</label>
            <input value={line} name="lineAmount" type="number" onChange={e => setLine(e.target.value)}/>
            
            <label htmlFor="addImage">Add an image</label>
            <input name="addImage" type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
            
            <button type="submit">Add</button>
        </form>
    )
}

export default NewProblem