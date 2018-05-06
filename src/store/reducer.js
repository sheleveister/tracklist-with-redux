import * as actionTypes from './actions';

const initialState = {
  tracks: [
    {id: 0, title: 'Smells like spirit'},
    {id: 1, title: 'Enter Sandman'}
  ]
};

const reducerPlaylist = (state = initialState, action) => {
  const newTrack = {
    id: state.tracks.length,
    title: action.payload
  };

  if (action.type === actionTypes.ADD_TRACK) {
    return {
      ...state,
      tracks: [...state.tracks, newTrack]
    }
  }
  if (action.type === actionTypes.REMOVE_TRACK) {
    return {
      ...state,
      tracks: state.tracks.filter((track) => track.id !== action.payload)
    }
  }
  return state;
};

export default reducerPlaylist;
