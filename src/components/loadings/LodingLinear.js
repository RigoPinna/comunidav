import React, { useEffect, useRef } from 'react'
import { useState } from 'react';


export const LodingLinear = ({ progress }) => {
    const refProgress = useRef( null )
    const refWidth = useRef( null )
    const [state, setstate] = useState([])
    useEffect(() => {
        progress && ( refProgress.current.style.width = `${progress}%` );
    }, [ progress ]);
    
    return (
        <span ref = { refWidth } className="__loading_linear">
            <span ref = { refProgress } className = '__loading_linear_progress'></span>
        </span> 
    )
}
