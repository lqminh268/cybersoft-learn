/* eslint-disable camelcase */
/* eslint-disable consistent-return */

import produce from 'immer';
import { combineReducers } from 'redux';

import { MODULE_CONFIG } from './config';
import ReduxTypes from '../../redux/constants';

import { initDefaultDataConfig, validateAll } from './utils';
const PREFIX = MODULE_CONFIG.key;

export function initialState() {
  return {
    isInitDone: false,
    isLoading: false,
    isDisableLgoin: false,
    dataConfig: initDefaultDataConfig(),
    isValidateAll: false,
  };
}

const mainReducerFor = () => {
  const mainReducer = (state = initialState(), action) =>
    produce(state, draft => {
      switch (action.type) {
        case `${PREFIX}${ReduxTypes.INIT}`: {
          draft.isLoading = true;
          return;
        }
        case `${PREFIX}${ReduxTypes.INIT_DONE}`: {
          draft.isLoading = false;
          draft.isInitDone = true;
          return;
        }
        case `${PREFIX}@@ERROR${ReduxTypes.INIT_DONE}`: {
          draft.isLoading = false;
          draft.isDisableLgoin = false;
          draft.isInitDone = false;
          return;
        }
        case `${PREFIX}@@ON_CHANGE_DATA_CONFIG${ReduxTypes.UPDATE}`: {
          const { name, value } = action.payload;
          draft.dataConfig[name].value = value;
          const { errors, isValidate } = draft.dataConfig[name].validate(
            draft.dataConfig[name],
          );
          draft.dataConfig[name].errors = errors;
          draft.dataConfig[name].isValidate = isValidate;

          draft.dataConfig.isValidate = validateAll(state, draft);
          return;
        }
        case `${PREFIX}${ReduxTypes.INIT_DONE}`: {
          const { data } = action.payload;
          draft.isLoading = false;
          draft.isInitDone = true;
          state.dataConfig.infoFields.forEach(each => {
            draft.dataConfig[each].value = data[each];
          });
          return;
        }
        case `${PREFIX}${ReduxTypes.RESET}`: {
          return initialState();
        }
        default:
          return state;
      }
    });
  return mainReducer;
};

export default combineReducers({
  main: mainReducerFor(),
});
