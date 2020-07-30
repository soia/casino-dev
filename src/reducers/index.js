
import { combineReducers } from 'redux';
import { authModal } from './authModal.reducer';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import refreshToken from './jwt.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    authModal,
    refreshToken,
});

export default rootReducer;
