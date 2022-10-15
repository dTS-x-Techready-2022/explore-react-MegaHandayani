import { combineRedusers } from 'redux';
import { counterReducers } from "./counter";
import { authReducers} from "/authentication";

const rootReduser = combineRedusers({
    counter: counterReducers,
    auth : authReducers,

});
 

export default rootReduser;