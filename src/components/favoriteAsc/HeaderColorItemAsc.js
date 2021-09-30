import React from 'react'

export const HeaderColorItemAsc = ({ color="#DBDBDB"}) => {
    return (
        <div className ="bg_item" style={{background:color}}>
            <span className="bg_item_effect_1"><span style={{background:color}}></span></span>
            <span className="bg_item_effect_2"><span style={{background:color}}></span></span>
        </div>
    )
}
