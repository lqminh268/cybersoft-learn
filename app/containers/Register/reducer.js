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
    isDisableRegiser: false,
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

          // const tmp = ['confirmPassword', 'password'];

          // tmp.forEach(((each,key) => {
          //   const name = tmp[key];
          //   const nextName = tmp[key+1];
          //   if( draft.dataConfig[name].value !== draft.dataConfig[nextName].value){
          //     draft.dataConfig.password.isValidate = false;
          //     draft.dataConfig.password.errors = ['Not match']
          //     draft.dataConfig.confirmPassword.isValidate = false;
          //     draft.dataConfig.confirmPassword.errors = ['Not match']
          //   }else{
          //     const { errors, isValidate } = draft.dataConfig.confirmPassword.validate(
          //       draft.dataConfig.confirmPassword,
          //     );
          //     draft.dataConfig.confirmPassword.isValidate = isValidate;
          //     draft.dataConfig.confirmPassword.errors = errors;
          //     draft.dataConfig.password.isValidate = isValidate;
          //     draft.dataConfig.password.errors = errors;
          //   }
          // }))
          
          if(name ==="confirmPassword" &&  draft.dataConfig.password.value !== draft.dataConfig.confirmPassword.value){
            draft.dataConfig.password.isValidate = false;
            draft.dataConfig.password.errors = ['Not match']
            draft.dataConfig.confirmPassword.isValidate = false;
            draft.dataConfig.confirmPassword.errors = ['Not match']
          }else if(name ==="confirmPassword" &&  draft.dataConfig.password.value === draft.dataConfig.confirmPassword.value){
            const { errors, isValidate } = draft.dataConfig.confirmPassword.validate(
              draft.dataConfig.confirmPassword,
            );
            draft.dataConfig.confirmPassword.isValidate = isValidate;
            draft.dataConfig.confirmPassword.errors = errors;
            draft.dataConfig.password.isValidate = isValidate;
            draft.dataConfig.password.errors = errors;
          }

           if(name ==="password" &&  draft.dataConfig.password.value !== draft.dataConfig.confirmPassword.value){
            draft.dataConfig.password.isValidate = false;
            draft.dataConfig.password.errors = ['Not match']
            draft.dataConfig.confirmPassword.isValidate = false;
            draft.dataConfig.confirmPassword.errors = ['Not match']
          }else  if(name ==="password" &&  draft.dataConfig.password.value === draft.dataConfig.confirmPassword.value){
            const { errors, isValidate } = draft.dataConfig.password.validate(
              draft.dataConfig.password,
            );
            draft.dataConfig.password.isValidate = isValidate;
            draft.dataConfig.password.errors = errors;
            draft.dataConfig.confirmPassword.isValidate = isValidate;
            draft.dataConfig.confirmPassword.errors = errors;
          }


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
