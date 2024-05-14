

const Button = ({funcToDo, order, name, icon}) => {

    return (
        <div>
            <button className={"iconBtn"} onClick={() => funcToDo(order)}>
                <span className="material-symbols-outlined">{icon}</span>
                <span>{name}</span>
            </button>
        </div>
    )
}

export default Button