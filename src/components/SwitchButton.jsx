import { useState, useRef } from "react"
import Togglable from "./Togglable"

const SwitchButton = ({funcToDo, problems, icon, order, name}) => {
    const [buttonVisible, setButtonVisible] = useState("hidden")

    const visibilityRef = useRef()

    const visBtn = <><span className="material-symbols-outlined">{icon}</span><span>Switch</span></>

    return (
        <div className={name}>
            
            <Togglable ref={visibilityRef} iconButton={visBtn}>
                <ul>
                    {Array.from({length: problems},
                        (_, i) => 
                        { 
                            return <li key={i}>
                            <button onClick={() => funcToDo(order, i+1)}>{i+1}</button>
                        </li>}
                    )}
                </ul>
            </Togglable>
        </div>
    )
}

export default SwitchButton