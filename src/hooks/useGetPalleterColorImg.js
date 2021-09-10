
import { useCallback } from 'react';
import { useLayoutEffect } from 'react'
import { useState } from 'react';

export const useGetPalleterColorImg = ( img , canvas ) => {
    const [ctx, setCtx] = useState( null )
    const [ palleteColors, setPalleteColors] = useState([])
    const getPallete = useCallback(
        () => {
            const cvs = canvas.current;
            if( cvs?.width ) {

                const imgData = ctx.getImageData( 0,0,cvs?.width, cvs?.height ).data;
                let arrayColors;
                for( let i = 0; i <  cvs?.width * cvs?.height; i+= 90 ) {
                    const offset = i * 4;
                    const alpha = imgData[ offset + 3 ];
                    if ( alpha > 0 ) {
                        const red = imgData[ offset ]
                        const blue = imgData[ offset + 1 ]
                        const green = imgData[ offset + 2 ]
                        arrayColors = [...[`rgba(${red}, ${blue}, ${green})`]]
                    }
                }
               const colors = new Set(arrayColors);
               let pallete = [...colors];
               pallete = pallete.slice(0,10);
               return pallete;
            }
            return['#OOO'];
            
        }, [ img ] )
    useLayoutEffect(() => {
        const cvs = canvas.current;
            if ( !!ctx ) {
                try {
                    img.crossOrigin = "Anonymous";
                    img.onload = () => {
                    ctx.clearRect(0, 0, cvs?.width, cvs?.height)
                    ctx.drawImage( img, 0,0, cvs?.width, cvs?.height )
                    const pallete = getPallete();
                    setPalleteColors( pallete );
                }

                }catch (e) {

                }
                
            } else {
                setCtx(cvs.getContext('2d'));
            }
            
    }, [ ctx, canvas,getPallete ])
    

    return [ palleteColors ];
}
