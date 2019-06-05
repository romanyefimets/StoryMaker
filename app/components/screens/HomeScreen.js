import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

import EditOptionsFooter from '../../../app/components/footers/EditOptionsFooter';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Edit Media',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <React.Fragment>
        <EditOptionsFooter />
      </React.Fragment>
    );
  }
}
