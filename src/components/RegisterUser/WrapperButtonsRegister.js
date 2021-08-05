import React, { useContext, useState } from 'react'
import { useValidateForm } from '../../hooks/useValidateForm';
import { fetchRegisterUser } from '../../services/fetchRegisterUser';
import { fetchValidateRFC } from '../../services/fetchValidateRFC';
import { fetchValidateUser } from '../../services/fetchValidateUser';
import { IconArrowRight } from '../iconos/IconArrowRight'
import { LoadingInComponent } from '../loadings/LoadingInComponent';
import { RegisterContext } from './RegisterContext';
import { goToassociationData, goToLocationData, goToUserData, isFinishFetching, isFinishProcess, viewAlertRFC } from './registerReducer';

export const WrapperButtonsRegister = ({ actualStep, formData, validForm, setValidForm }) => {
    const { stateProgress, dispatch } = useContext( RegisterContext );
    const [ OBJ_VALIDATED, isValid ] = useValidateForm(validForm ,formData );
    const [ isLoading, setisLoading ] = useState( false );

    const handleGoToNextStep = ( evt ) => {
        evt.preventDefault();
        switch ( actualStep ) {
            case 1:
                if ( isValid ) {
                    setisLoading( true )
                    fetchValidateRFC( formData.rfc ).then( resp => {
                        ( resp.status === 'accept' )
                            ? dispatch( goToLocationData( formData ) )
                            :  dispatch( viewAlertRFC( true ) );
                            setisLoading( false )
                    }).catch( err => console.log(err ));

                } else {
                    setValidForm( OBJ_VALIDATED );
                }
                break;
            case 2:
                ( isValid ) 
                    ? dispatch( goToUserData( formData ) )
                    : setValidForm( OBJ_VALIDATED );
                break;
            case 3:
                if ( isValid ) {
                    setisLoading( true );
                    fetchValidateUser(formData.userName, formData.email).then( resp => {
                        if ( resp.status === 'accepted') {
                            ( isValid ) 
                                ? dispatch( goToassociationData( formData ) )
                                : setValidForm( OBJ_VALIDATED );
                        } else {
                            alert(`email:${resp.errorEmail}, username:${resp.errorUserName}`)
                        }
                        setisLoading( false );
                    })
                } else {
                    setValidForm( OBJ_VALIDATED );
                }
                break;
            default:
                break;
        }
    }
    const hanldeStartCreateUser = ( evt ) => {
        evt.preventDefault();

        if ( stateProgress.totallyStep === actualStep ) {
            if ( isValid ) {
                dispatch( isFinishProcess( formData, true ) );
                const userData = {...stateProgress.formData, ...formData };
                console.log( userData );
                fetchRegisterUser( userData ).then( resp => {
                    if ( resp.status === 'error') {
                        const msg = `${resp.errorRFC}\n ${resp.errorEmail}\n ${resp.errorUserName}`;
                        dispatch(isFinishFetching( msg ))
                    } else {
                        dispatch(isFinishFetching( resp.msg, resp.status ))
                    }
                }).catch( err => console.log( err ));
                
            } else {
                setValidForm( OBJ_VALIDATED );
            }
        }
    }
    return (
        <>
            <div className = "__form_register_wrapper_buttons_footer">
                { 
                    ( stateProgress.totallyStep === actualStep )
                        ? <button onClick = { hanldeStartCreateUser }className = "__btn __btn_created" >
                            Crear cuenta
                        </button> 
                        : <button onClick = { handleGoToNextStep }className = "__btn " disabled ={ isLoading } >
                                { 
                                    isLoading
                                        ? <LoadingInComponent />
                                        :<>
                                            <p>Siguiente</p>
                                            <IconArrowRight />
                                        </>
                                }
                            </button>  
                }
            </div>
        </>
    )
}
