import React, { useEffect } from 'react'
import Confetti from 'react-confetti'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {useWindowSize} from 'react-use';
import { addConffetti } from '../../reducers/uiReducer';
export const EffectConffetti = () => {
    const { width, height } = useWindowSize();
    const { viewConffetti } = useSelector( state => state.uiReducer );
    const dispatch = useDispatch();
    useEffect(() => {
        let idInterval = null;
        if ( viewConffetti ) {
            let i = 0;
            idInterval = setInterval(() => {
                i++;
                if( i > 10 ) {
                    dispatch(addConffetti(false));
                    clearInterval(idInterval);
                }
            }, 1000);
        }
        return () => !!idInterval && clearInterval(idInterval);
    }, [ viewConffetti ])
    return (
        <>
            {
                viewConffetti 
                    &&  <div className="__wapper_conffeti">
                            <Confetti width={ width } height={ height }/>
                        </div>
            }
        </>
    )
}
