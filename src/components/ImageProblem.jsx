

const ImageProblem = ({ number, lines, image }) => {

    const linesToPrint = <p>{"_".repeat(lines)}</p>

    return (
        <div>
            <h2 contentEditable>Problem {number}</h2>
            <div className="imageDisplay">
                <img src={URL.createObjectURL(image)} width="100%" height="100%" />
            </div>
            {linesToPrint}
        </div>
    )
}

export default ImageProblem