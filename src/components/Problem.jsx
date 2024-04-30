

const Problem = ({ number, lines }) => {

    const linesToPrint = <p>{"_".repeat(lines)}</p>

    return (
        <div>
            <h2>Problem {number}</h2>
            {linesToPrint}
        </div>
    )
}

export default Problem