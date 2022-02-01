import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { unSuscribedGroup } from "../reducers/groupsEventReducer";
import { deleteEvent } from "../reducers/myEventsReducer";
import { openModalListParticipants } from "../reducers/uiReducer";


export const useActionsEvents = ({ participants, eid }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.userLogedReducer)
    const { userLogedReducer } = useSelector(state => state)
    const hanldeViewList = () => {
        dispatch( openModalListParticipants( participants, userLogedReducer ))
    }
    const hanldeGoToEvent = () => {
        history.push(`/event?query=${eid}`)
    }
    const hanldeDeleteEvent = () => {
        dispatch( deleteEvent( eid, uid ) );
    }
    const handleUnsuscribed = () => {
        dispatch(unSuscribedGroup( eid ));

    }
    return { hanldeViewList, hanldeGoToEvent, hanldeDeleteEvent, handleUnsuscribed };
}
