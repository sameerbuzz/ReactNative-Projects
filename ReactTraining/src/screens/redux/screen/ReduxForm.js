import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";

class ReduxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> ReduxForm </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
    const {  } = state.countereducer;
    return {
     
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    
  })
  

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ReduxForm);
