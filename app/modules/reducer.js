/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import produce from 'immer';
import ReduxTypes from '../redux/constants';

export const initialState = {
  notification: {
    isOpen: false,
    content: '',
    severity: '',
  },
};

function dashboardReducer(state = initialState, action) {
  // console.log('dashboardReducer', action.type);
  return produce(state, draft => {
    switch (action.type) {
      case `${ReduxTypes.UPDATE_VALUE}`: {
        // console.log('update is loading', action.payload);
        draft.isLoading = action.payload;
        return;
      }
      case `${ReduxTypes.ADD_NOTI}`: {
        const { content, severity } = action.payload;
        draft.notification.isOpen = true;
        draft.notification.content = content;
        draft.notification.severity = severity;
        return;
      }
      case `${ReduxTypes.REMOVE_NOTI}`: {
        draft.notification.isOpen = false;
        draft.notification.content = '';
        draft.notification.severity = '';
        return;
      }
      default:
        return state;
    }
  });
}

export default dashboardReducer;
