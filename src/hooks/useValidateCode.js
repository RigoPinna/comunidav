import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateVerify } from '../reducers/authReducer';
import { REGEX_INPUT_VALUES } from '../helpers/REGULAR_EXPRESSIONS';
import { fetchVerifyUserCode } from '../services/fetchVerifyUserCode';

export const useValidateCode = (c1, c2, c3, email, displayName ) => {

    const dispatch = useDispatch();
    const { email } = useSelector( state => state.userLogedReducer );

    const [ codes, setCode ] = useState({c1:'',c2:'',c3:''});
    const [isLoading, setisLoading] = useState({loadingVerify: false, loadingFordwardCode: false, errorCode:false});
    const [ forwardCode, setForwadCode ] = useState( false ); 

    const handdleInputChange = ( evt ) => {
        evt.preventDefault();
        const inputName = evt.target.name
        const value = evt.target.value.trim();
        isTheCompleteCode( value );
        if ( value.trim() !== '' ) {
           if ( value.length === 3 ){
               switch ( inputName ) {
                   case 'c1':
                       c2.current.select()
                       break;
                   case 'c2':
                       c3.current.select()
                       break;
                   default:
                       break;
               }
            }
        }
        ( value.length <= 3 ) && setCode({...codes, ...{[inputName]:value }})
    }
    const isTheCompleteCode = ( codePasted ) => {
        const { code } = REGEX_INPUT_VALUES;
        if ( code.test( codePasted ) ) {
            const matches = codePasted.match( code );
            let objTemp = {}
            matches.forEach( ( code, i ) => {
                switch ( i ) {
                    case 1:
                        objTemp = { ...objTemp, ...{c1:code}}
                        break;
                    case 2:
                        objTemp = { ...objTemp, ...{c2:code}}
                        break;
                    case 3:
                        objTemp = { ...objTemp, ...{c3:code}}
                        break;
                    default:
                        break;
                } 
            });
            setCode({...codes, ...objTemp });
        } 
    }
    const verifyCode = ( evt ) => {
        evt.preventDefault();
        const valueCodes = Object.values( codes );
        if ( !valueCodes.includes('') ) {
            setisLoading({...isLoading,...{ loadingVerify:true} });
            fetchVerifyUserCode( codes, email ).then( resp => {
                
                if ( resp.status === 'accept' ) {
                    setisLoading({...isLoading,...{ loadingVerify:false, errorCode:false } });
                    dispatch( updateVerify() );
                } else {
                    setisLoading({...isLoading,...{ loadingVerify:false, errorCode:true } });
                }
            }).catch( err => {
                console.log( err );
                setisLoading({...isLoading,...{ loadingVerify:false } });
            })
        } else {
            setisLoading({...isLoading,...{ loadingVerify:false, errorCode:true } });
        }
        
    }
    const handleFordwardCode = ( evt ) => {
        evt.preventDefault();
        setisLoading({...isLoading,...{ loadingFordwardCode: true } });
        // setForwadCode({...fordwardCode, ...{ isSended:true }});
        
    }
    return [ codes, handdleInputChange, verifyCode, isLoading, handleFordwardCode, forwardCode ];
}
