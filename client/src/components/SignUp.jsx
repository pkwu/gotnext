import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

class SignUp extends Component {
  render() {
    return(
      <div>
        --- SignUp Component Here ---
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
};

export default connect(mapStateToProps)(SignUp);