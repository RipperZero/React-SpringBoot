import { combineReducers } from 'redux';
import { ActionTypes } from '../actions/actionTypes';

function studentData (state = {data: []}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_REQUEST:
      return {
        ...state,
        data: [],
      };
    case ActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case ActionTypes.FETCH_STUDENT_INFO_SUCCESS:
      return {
        ...state,
        data: [action.data],
      };
    default:
      return state;
  }
};

function movieRecentList (state = {data: []}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_RECENT_REQUEST:
      return {
        ...state,
        data: [],
      };
    case ActionTypes.FETCH_MOVIE_RECENT_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case ActionTypes.FETCH_MOVIE_RECENT_FAILURE:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

function movieTopList (state = {data: []}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_TOP_REQUEST:
      return {
        ...state,
        data: [],
      };
    case ActionTypes.FETCH_MOVIE_TOP_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case ActionTypes.FETCH_MOVIE_TOP_FAILURE:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default combineReducers({
  studentData,
  movieRecentList,
  movieTopList,
});