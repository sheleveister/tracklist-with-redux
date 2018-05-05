import * as actionTypes from './actions';

const initialState = [
  'Smells like spirit',
  'Enter Sandman'
];

const reducerPlaylist = (state = initialState, action) => {
  if (action.type === actionTypes.ADD_TRACK) {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
};

export default reducerPlaylist;