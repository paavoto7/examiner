import DeleteButton from "./DeleteButton"

const TextProblem = ({ number, lines, deleteProblem }) => {

    const linesToPrint = <p className="wrap">{"_".repeat(lines)}</p>

    return (
        <div>
            <h2 contentEditable suppressContentEditableWarning="true">Problem {number}</h2>
            <DeleteButton deleteProblem={deleteProblem} order={number} />
            {linesToPrint}
        </div>
    )
}

export default TextProblem