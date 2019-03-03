import {combineReducers} from 'redux';
import ActiveTabReducer from './reducer_active_tab';

const rootReducer = combineReducers({
  activeTab: ActiveTabReducer
});

export default rootReducer;