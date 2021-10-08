import React, { useLayoutEffect, useRef } from 'react'
import { MessageRecibed } from '../../chat/MessageRecibed'

export const ContentRespones = React.memo(({ resp, pid }) => {
    const content = useRef( null );
    useLayoutEffect(() => {
        if ( !!content.current ) {
            content.current.scrollTop = -1000000000;
        }
    }, [ resp ])
    return (
        <div ref= { content } className="container-response">
            {
                (resp.length > 0) 
                    && resp.map( 
                        ({ uid, image, displayName, response, createdat }, i ) => {
                            return <MessageRecibed 
                                        key={`resp-${pid}-${uid}-${i}`} 
                                        image={image} 
                                        displayName={displayName} 
                                        text={response}
                                        createdat={createdat}/>
                        }
                    )
            }
        </div>
    )
})
