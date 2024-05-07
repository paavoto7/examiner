

const Dropdown = ({ toDo }) => {

    return(
        <div className="dropdown">
            <label htmlFor="dropdownMenu">Line height: </label>
            <select name="dropdownMenu" className="dropdownMenu" onChange={event => toDo(event.target.value)}>
                <option value={1}>1</option>
                <option value={1.25}>1.25</option>
                <option value={1.5}>1.5</option>
            </select>
        </div>
    )
}

export default Dropdown