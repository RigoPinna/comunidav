import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { RegisterContext } from "../components/RegisterUser/RegisterContext";
import { goToassociationData, goToLocationData, goToUserData, isFinishFetching, isFinishProcess, viewAlertRFC } from "../components/RegisterUser/registerReducer";
import { closeAlert, openAlert } from "../reducers/uiReducer";
import { fetchLogin } from "../services/fetchLogin";
import { fetchRegisterUser } from "../services/fetchRegisterUser";
import { fetchValidateRFC } from "../services/fetchValidateRFC";
import { fetchValidateUser } from "../services/fetchValidateUser";
import { useValidateForm } from "./useValidateForm";


export const useActionButtonsRegister = ( actualStep, formData, validForm, setValidForm ) => {
    const history = useHistory();
    const reduxDispatch = useDispatch();
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
                            // alert(`email:${resp.errorEmail}, username:${resp.errorUserName}`)
                            reduxDispatch( openAlert(
                                "Error",
                                `${ !!resp.errorEmail ? `Email: ${resp.errorEmail}.`:""}
                                ${ !!resp.errorUserName ? `Nombre de usuario: ${resp.errorUserName}`:""}`,
                                () => reduxDispatch( closeAlert() ),
                            ))
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
            setisLoading( true )
            if ( isValid &&  OBJ_VALIDATED.terms ) {
                const userData = {...stateProgress.formData, ...formData };
                fetchRegisterUser( userData ).then( resp => {
                    setisLoading( false )
                    if ( resp.status === 'error') {
                        reduxDispatch( openAlert(
                            "Error",
                            `${ !!resp.errorEmail ? `Email: ${resp.errorEmail}.`:""}
                            ${ !!resp.errorUserName ? `Nombre de usuario: ${resp.errorUserName}`:""}
                            ${ !!resp.errorRFC ? `RFC: ${resp.errorRFC}`:""}`,
                            () => reduxDispatch( closeAlert() ),
                        ))
                    } else {
                        reduxDispatch(openAlert(
                            "¡Bienvenido a Comunidav!",
                            resp.msg,
                            () => {
                                fetchLogin({ user:userData.userName, password:userData.password }).then( resp => {
                                    localStorage.setItem( 'uid', resp.userID );
                                    sessionStorage.setItem( 'token',resp.token );
                                    history.replace("/profile");
                                    reduxDispatch( closeAlert()); 
                                });
                            },
                            true,
                            () => {
                                history.replace('/login');
                                reduxDispatch( closeAlert());
                            },
                            "Iniciar sesión"
                        ));
                    }
                }).catch( err => {
                    reduxDispatch( openAlert(
                        "Upps",
                        `Al parecer algo salió mal, intente más tarde`,
                        () => reduxDispatch( closeAlert() )
                    ))
                    setisLoading( false )

                });             
            } else {
                !OBJ_VALIDATED.terms &&
                reduxDispatch( openAlert(
                    "Error",
                    `Por favor, acepta nuestros terminos y condiciones y aviso de privacidad para poder crear tu cuenta.`,
                    () => reduxDispatch( closeAlert() )
                ))
                setValidForm( OBJ_VALIDATED );
                setisLoading( false )
            }
            
        }
    }
    return [ stateProgress.totallyStep, isLoading, handleGoToNextStep, hanldeStartCreateUser ]
    
}
