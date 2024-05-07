

const Button = ({funcToDo, order, name}) => {

    return (
        <button className={name} onClick={() => funcToDo(order)}>{name}</button>
    )
}

export default Button