import { useState } from "react"

export function HideText ({text}) {

    const [isFullText, setIsFullText] = useState(false)

    return (
        <>
            {!isFullText &&
            <>
                <p>{text.split(".")[0] + '.'}</p>
                <button onClick={() => setIsFullText((prevValue) => !prevValue)}>Показать подробнее</button>
            </>
            }
            {isFullText &&
            <>
                <p>{text}</p>
                <button onClick={() => setIsFullText((prevValue) => !prevValue)}>Свернуть</button>
            </>
            }
        </>
    )
}