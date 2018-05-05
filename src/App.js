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

  render() {
    return (
      <div className="container">
        <div className="app-content">
          <div className="app-content__input">
            <input
              type="text"
              ref={(input) => { this.trackInput = input }}
              onKeyUp={(event) => this.addTrackFromInputField(event)} />
            <button onClick={this.addTrack.bind(this)}>Add track</button>
          </div>

          <div className="app-content__list">
            <ul>
              {this.props.testStore.map((track, i) => {
                return <li key={i}>{track}</li>
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
    testStore: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTrack: (trackName) => { dispatch({ type: actionTypes.ADD_TRACK, payload: trackName }) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
