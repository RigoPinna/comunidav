import React from 'react'

export const LoadingScreen = () => {
    return (
        <div className = "__Loadings_loading_screen" >
            <svg width="73" height="46" viewBox="0 0 73 46" fill="none">
                <rect 
                    className="circle_red"
                    width="45.625" 
                    height="45.625" 
                    rx="22.8125" 
                    fill="#303338"
                />
                <rect 
                    className="circle_purple"
                    x="31.875" 
                    y="4.5" 
                    width="36.625" 
                    height="36.625" 
                    rx="18.3125" 
                    stroke="#828282" 
                    strokeOpacity="0.63" 
                    strokeWidth="9"/>
            </svg>
            <h2>Comunidav</h2>
            <p>Comunidad de Donadores, Asociaciones y Voluntarios</p>
            
        </div>
    )
}
