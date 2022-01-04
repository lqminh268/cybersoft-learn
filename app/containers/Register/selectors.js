import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { MODULE_CONFIG } from './config';

const selectDomain = state =>
    state.get(MODULE_CONFIG.key) || {
        main: initialState,
    };

const makeSelectCreateMain = () =>
    createSelector(
        selectDomain,
        substate => substate.main,
    );
const makeSelectCreate = () =>
    createSelector(
        selectDomain,
        substate => substate,
    );
    
export default makeSelectCreate;
export { makeSelectCreateMain };