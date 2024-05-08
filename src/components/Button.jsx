

const Button = ({funcToDo, order, name, icon}) => {

    return (
        <button className={name + "iconBtn"} onClick={() => funcToDo(order)}>
            <span className="material-symbols-outlined">{icon}</span>
            <span>{name}</span>
        </button>
    )
}

export default Button