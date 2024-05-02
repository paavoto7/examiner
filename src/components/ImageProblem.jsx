import DeleteButton from "./DeleteButton"

const ImageProblem = ({ number, lines, image, deleteProblem }) => {

    const linesToPrint = <p className="wrap">{"_".repeat(lines)}</p>

    return (
        <div>
            <h2 contentEditable suppressContentEditableWarning="true">Problem {number}</h2>
            <DeleteButton deleteProblem={deleteProblem} order={number} />
            <div className="imageDisplay">
                <img src={URL.createObjectURL(image)} width="100%" height="100%" />
            </div>
            {linesToPrint}
        </div>
    )
}

export default ImageProblem