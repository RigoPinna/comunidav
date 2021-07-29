import React from 'react'

export const LoadingInComponent = ({ textLoading = '' }) => {
    return (
        <div className = "__loading_wrapper_in_component">
            <div className = "__loading-spinner">
            </div>
            { ( textLoading !== '' ) && <p>{ textLoading }</p> }
        </div>
    )
}
