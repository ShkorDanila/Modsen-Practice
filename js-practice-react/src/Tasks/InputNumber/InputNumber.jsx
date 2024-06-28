import { useState } from "react"
import { Message } from "./Message"

export function InputMessage () {
    
    const [inputText, setInputText] = useState(null)
    
    return (
        <div>
            <input type="number" onChange={(e) => {setInputText(e.currentTarget.value)}}></input>
            <Message number={inputText}></Message>
        </div>
    )
}