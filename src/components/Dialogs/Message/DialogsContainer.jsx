import Dialogs from "../Dialogs";
import {addMessageActionCreator, changeMessageActionCreator} from "../../../redux/dialog-reducers";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        data: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        ChangeMessage: (text) => {
            dispatch(changeMessageActionCreator(text))
        },
        onSendMessageClick: () => {
            dispatch(addMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;