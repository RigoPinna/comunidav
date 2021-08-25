import { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react';

export const useGetPalleterColorImg = ( img , canvas ) => {
    const [ctx, setCtx] = useState( null )
    const [ palleteColors, setPalleteColors] = useState([])
    useLayoutEffect(() => {
        const cvs = canvas.current;
            if ( !!ctx ) {
                img.crossOrigin = "Anonymous";
                img.onload = () => {
                    ctx.clearRect(0, 0, cvs.width, cvs.height)
                    ctx.drawImage( img, 0,0, cvs.width, cvs.height )
                    getPellete()

                }
            } else {
                setCtx(cvs.getContext('2d'));
            }
            
    }, [ ctx ])
    const getPellete = () => {
        const cvs = canvas.current;
        const imgData = ctx.getImageData( 0,0,cvs.width, cvs.height ).data;
        let arrayColors = [];
        for( let i = 0; i <  cvs.width * cvs.height; i+= 90 ) {
            const offset = i * 4;
            const alpha = imgData[ offset + 3 ];
            if ( alpha > 0 ) {
                const red = imgData[ offset ]
                const blue = imgData[ offset + 1 ]
                const green = imgData[ offset + 2 ]
                arrayColors = [...arrayColors,...[`rgba(${red}, ${blue}, ${green})`]]
            }
        }
    //    console.log(arrayColors)
       const colors = new Set(arrayColors);
       let pallete = [...colors];
       pallete = pallete.slice(0,4);
       console.log('%c color',`background:${pallete[0]}`);
       console.log('%c color',`background:${pallete[1]}`);
       console.log('%c color',`background:${pallete[2]}`);
       console.log('%c color',`background:${pallete[3]}`);
        setPalleteColors( pallete );
    }

    return [ palleteColors ];
}
