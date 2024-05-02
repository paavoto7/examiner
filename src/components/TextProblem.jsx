

const TextProblem = ({ number, lines }) => {

    const linesToPrint = <p>{"_".repeat(lines)}</p>

    return (
        <div>
            <h2 contentEditable>Problem {number}</h2>
            {linesToPrint}
        </div>
    )
}

export default TextProblem