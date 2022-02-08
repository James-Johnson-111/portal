import EmpAuth from './EmpAuth';
import SideBar from './SideBar';
import Chatbot from './Chatbot';

import { combineReducers } from 'redux';

const rootReducer = combineReducers(
    {
        EmpAuth,
        Chatbot,
        SideBar
    }
)

export default rootReducer;