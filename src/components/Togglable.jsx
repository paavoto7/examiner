import { useState, useImperativeHandle, forwardRef } from "react"

const Togglable = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility, visible
        }
    })

    return (
        <div>
            <div style={hideWhenVisible}>
                {props.iconButton
                ? <button className="iconBtn" onClick={toggleVisibility}>{props.iconButton}</button>
                : <button onClick={toggleVisibility} type="button">{props.buttonLabel}</button>
                }
            </div>
            <div style={showWhenVisible}>

                {props.children}
                <button onClick={toggleVisibility} type="button">cancel</button>
            </div>
        </div>
    )
})

export default Togglable