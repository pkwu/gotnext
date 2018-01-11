import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {fetchGameData} from '../actions/fetchGameData';
import {setEditState} from '../actions/setEditState';
import {fetchUsers} from '../actions/fetchUsers';

import axios from 'axios';

import Nav from './Nav.jsx';
import Main from './Main.jsx';

class App extends Component {

  // on load, axios request to render games on map
  componentDidMount() {
    
    this.props.setEditState(false);
    
    // fetch list of all GAMES and put it in store as 'gameData
    axios.get('/api/map/fetch')
      .then(response => {
        console.log('fetching data on componentDidMount')
        this.props.fetchGameData(response.data)
      })
      .catch(err => {
        console.log('error fetching data on componentDidMount', err)
      })

    // fetch list of all USERS and put it in store as 'userList'
    axios.get('/api/games/fetch/users')
      .then(response => {        
        console.log('fetching user list on componentDidMount')
        this.props.fetchUsers(response.data)
      })
      .catch(err => {
        console.log('error fetching user list on componentDidMount', err)
      })
  }

  render() {
    if (!this.props.gameData) {
      return null
    }

    return(
      <div>
        <h1>.got(Next)</h1>  
        <hr/>
        <Nav />
        <hr/>
        <Main />
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    gameData: state.gameData
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchGameData:fetchGameData,
    fetchUsers:fetchUsers,
    setEditState:setEditState
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);