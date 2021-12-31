import Types, { ReduxTableTypes } from './constants';

export function dashboardUserVerify(actionKey, payload) {
  return { type: `DASHBOARD/USER_VERIFY`, payload };
}
export function dashboardAddNoti(payload) {
  return { type: Types.ADD_NOTI, payload };
}

export function dashboardRemoveNoti(payload) {
  return { type: Types.REMOVE_NOTI, payload };
}

export function onScroll(actionKey, payload) {
  return { type: `${actionKey}${Types.ON_SCROLL}`, payload };
}

export function init(actionKey, payload) {
  return { type: `${actionKey}${Types.INIT}`, payload };
}

export function initDone(actionKey, payload) {
  return { type: `${actionKey}${Types.INIT_DONE}`, payload };
}

export function reset(actionKey) {
  return { type: `${actionKey}${Types.RESET}` };
}

export function getList(actionKey, payload) {
  return { type: `${actionKey}${Types.GET_LIST}`, payload };
}

export function getListDone(actionKey, payload) {
  return { type: `${actionKey}${Types.GET_LIST_DONE}`, payload };
}

export function getDetail(actionKey, payload) {
  return { type: `${actionKey}${Types.GET_DETAIL}`, payload };
}

export function getDetailDone(actionKey, payload) {
  return {
    type: `${actionKey}${Types.GET_DETAIL_DONE}`,
    payload,
  };
}

export function create(actionKey, payload) {
  return { type: `${actionKey}${Types.CREATE}`, payload };
}

export function createDone(actionKey, payload) {
  return { type: `${actionKey}${Types.CREATE_DONE}`, payload };
}

export function update(actionKey, payload) {
  return { type: `${actionKey}${Types.UPDATE}`, payload };
}

export function updateDone(actionKey, payload) {
  return { type: `${actionKey}${Types.UPDATE_DONE}`, payload };
}

export function remove(actionKey, payload) {
  return {
    type: `${actionKey}${Types.DELETE}`,
    payload,
  };
}

export function removeDone(actionKey, payload) {
  return {
    type: `${actionKey}${Types.DELETE_DONE}`,
    payload,
  };
}

export function updateValue(actionKey, payload) {
  return { type: `${actionKey}${Types.UPDATE_VALUE}`, payload };
}

// action table

export function onTableInit(prefix, payload) {
  return { type: `${prefix}${ReduxTableTypes.TABLE_INIT}`, payload };
}

export function onTableSort(prefix, payload) {
  return { type: `${prefix}${ReduxTableTypes.ON_SORT}`, payload };
}

export function onTablePaging(prefix, payload) {
  return { type: `${prefix}${ReduxTableTypes.ON_PAGINATION}`, payload };
}

export function onTableSelectRow(prefix, payload) {
  return { type: `${prefix}${ReduxTableTypes.ON_SELECT_ROW}`, payload };
}

export function onTableResetSelectRow(prefix, payload) {
  return { type: `${prefix}${ReduxTableTypes.ON_RESET_SELECT_ROW}`, payload };
}

export function onTableResetPaging(prefix) {
  return { type: `${prefix}${ReduxTableTypes.RESET_PAGING}` };
}

export function onTableSelectAll(prefix, payload) {
  return { type: `${prefix}${ReduxTableTypes.ON_SELECT_ALL}`, payload };
}

export function onTableSelectAllPage(prefix, payload) {
  return { type: `${prefix}${ReduxTableTypes.ON_SELECT_ALL_IN_PAGE}`, payload };
}
export function onTableSubRow(prefix, payload) {
  return { type: `${prefix}${ReduxTableTypes.ON_TABLE_SUB_ROW}`, payload };
}
export function onUpdateIsColumnsLoaded(prefix, payload) {
  return {
    type: `${prefix}${ReduxTableTypes.ON_UPDATE_IS_COLUMNS_LOADED}`,
    payload,
  };
}
