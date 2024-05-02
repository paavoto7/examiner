

const DeleteButton = ({deleteProblem, order}) => {

    return (
        <button className="deleteButton" onClick={() => deleteProblem(order)}>Delete</button>
    )
}

export default DeleteButton