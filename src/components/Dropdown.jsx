

const Dropdown = ({ handleChange, values, label }) => {

    return(
        <div className="dropdown">
            <label htmlFor="dropdownMenu">{label}</label>
            <select id="dropdownMenu" className="dropdownMenu" onChange={event => handleChange(event.target.value)}>
                {values.map(value => 
                    <option key={value} value={value}>{value}</option>
                )}
            </select>
        </div>
    )
}

export default Dropdown