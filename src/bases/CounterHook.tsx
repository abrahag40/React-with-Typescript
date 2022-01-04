import { useCounter } from '../hooks/useCounter';

const CounterHook = () => {

    const { counter, elementToAnimate, handlerClick } = useCounter({ maxCount: 10 })

    return (
        <>
            <h1>CounterHook</h1>
            <h2 ref={ elementToAnimate }> { counter } </h2>

            <button onClick={ handlerClick }>
                +1
            </button>
        </>
    )
}

export default CounterHook
