

const Dropdown = ({ handleChange, values }) => {

    return(
        <div className="dropdown">
            <label htmlFor="dropdownMenu">Line height: </label>
            <select name="dropdownMenu" className="dropdownMenu" onChange={event => handleChange(event.target.value)}>
                {values.map(value => 
                    <option value={value}>{value}</option>
                )}
            </select>
        </div>
    )
}

export default Dropdown