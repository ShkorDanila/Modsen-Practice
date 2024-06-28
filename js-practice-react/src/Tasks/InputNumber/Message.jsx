export function Message ({number}) {
    return (
        <p>{number > 0 ? "Число больше нуля" : number < 0 ? "Число меньше нуля" : ""} </p>
    )
}