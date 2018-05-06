import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';

import './App.css';

class App extends Component {

  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  addTrackFromInputField(event) {
    if (event.keyCode === 13) {
      this.addTrack();
    }
  }

  removeTrack(index) {
    this.props.onRemoveTrack(index);
  }

  render() {
    return (
      <div className="container">
        <div className="app-content">
          <div className="app-content__input">
            <input
              type="text"
              ref={(input) => {
                this.trackInput = input
              }}
              onKeyUp={(event) => this.addTrackFromInputField(event)}/>
            <button onClick={this.addTrack.bind(this)}>Add track</button>
          </div>

          <div className="app-content__list">
            <ul>
              {this.props.testStore.map((track) => {
                return <li key={track.id}
                  onClick={() => this.removeTrack(track.id)}>
                  <b> {track.id + 1} </b>
                  {track.title}
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testStore: state.tracks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTrack: (trackName) => {
      dispatch({ type: actionTypes.ADD_TRACK, payload: trackName })
    },
    onRemoveTrack: (trackId) => {
      dispatch({ type: actionTypes.REMOVE_TRACK, payload: trackId })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
