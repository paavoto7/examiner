import { useRef, useEffect } from "react"
import Togglable from "./Togglable"

const SwitchButton = ({funcToDo, problems, icon, index}) => {

    const visibilityRef = useRef()
    const clickOutsideRef = useRef(null)

    const visBtn = <><span className="material-symbols-outlined">{icon}</span><span>Switch</span></>

    const handleClickOutside = event => {
        if (clickOutsideRef.current
            && !clickOutsideRef.current.contains(event.target)
            && visibilityRef.current.visible === true) {
            visibilityRef.current.toggleVisibility()
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    },[])

    return (
        <div ref={clickOutsideRef}>
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
        </div>
    )
}

export default SwitchButton