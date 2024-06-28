import { useRef } from "react"
import "./FormUseRef.css"

export function FormUseRef () {

    const currentInputRef = useRef("")

    function handleClick(e) {
        e.preventDefault()
        console.log(currentInputRef.current)
    }

    return (
        <form className="taskForm">
            <input onChange={(e) => currentInputRef.current = e.currentTarget.value} type="text"></input>
            <button onClick={handleClick}>Вывести в консоль</button>
        </form>    
    )
}