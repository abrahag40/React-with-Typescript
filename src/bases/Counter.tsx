import { useState } from "react"

interface CounterProps {
    initialValue?: number,
}

const Counter = ({ initialValue = 0 }: CounterProps) => {

    const [counter, setCounter] = useState(initialValue)

    const handlerClick = () => {
        setCounter( prev => prev + 1 )
    }

    return (
        <>
            <h1>Counter { counter } </h1>

            <button onClick={ handlerClick }>
                +1
            </button>
        </>
    )
}

export default Counter
