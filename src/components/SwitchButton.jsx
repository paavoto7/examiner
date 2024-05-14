import { useRef } from "react"
import Togglable from "./Togglable"

const SwitchButton = ({funcToDo, problems, icon, index}) => {

    const visibilityRef = useRef()

    const visBtn = <><span className="material-symbols-outlined">{icon}</span><span>Switch</span></>

    return (       
        <Togglable ref={visibilityRef} iconButton={visBtn}>
            <ul>
                {Array.from({length: problems},
                    (_, i) => 
                    { 
                        return <li key={i}>
                        <button onClick={() => funcToDo(index, i)}>{i+1}</button>
                    </li>}
                )}
            </ul>
        </Togglable>
    )
}

export default SwitchButton