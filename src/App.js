import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {

  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  render() {
    return (
      <div className="container">
        <div className="app-content">
          <div className="app-content__input">
            <input type="text" ref={(input) => {this.trackInput = input;}} />
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

export default connect(
  state => ({
    testStore: state
  }), // mapStateToProps
  dispatch => ({
    onAddTrack(trackName) {
      dispatch({ type: 'ADD_TRACK', payload: trackName })
    }
  })
)(App);
