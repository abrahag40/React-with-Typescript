import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 10 }) => {

    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>(null);
    const tl = useRef( gsap.timeline() )

    const handlerClick = (  ) => {
        setCounter( prev => Math.min( prev + 1, maxCount ) )
    }

    useLayoutEffect(() => {
        if( !elementToAnimate.current ) return
        tl.current.to( elementToAnimate.current, { y: -30, duration: 0.2, ease: 'ease.out' } )
                  .to( elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' } )
                  .pause();
    }, [])

    useEffect(() => {
        if( counter < maxCount ) return;
        tl.current.play(0)
    }, [counter, maxCount])

    return {
        counter: counter,
        elementToAnimate,
        handlerClick
    }
}
