import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {connect} from 'react-redux';

class ChangeColor extends Component {
  render() {
    const color = this.props.myHighlight === true ? 'green' : 'red';
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.dispatch({type: 'CHANGE_COLOR'});
        }}>
        <Text style={{fontSize: 20, color}}>Change Color</Text>
      </TouchableOpacity>
    );
  }
}

function mapStateToProps(state) {
  return {myHighlight: state.highlight};
}

export default connect(mapStateToProps)(ChangeColor);
