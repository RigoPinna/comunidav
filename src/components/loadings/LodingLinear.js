import React, { useEffect, useRef } from 'react'

export const LodingLinear = ({ progress }) => {
    const refProgress = useRef( null )
    const refWidth = useRef( null )
    useEffect(() => {
        progress && ( refProgress.current.style.width = `${progress}%` );
    }, [ progress ]);
    
    return (
        <span ref = { refWidth } className="__loading_linear">
            <span ref = { refProgress } className = '__loading_linear_progress'></span>
        </span> 
    )
}
