import React from 'react';
import {Text} from 'react-native'
import {Icon, ButtonGroup} from 'react-native-elements'
import { Container, Header, Content, Footer, FooterTab, Button} from 'native-base';

export default class EditOptionsFooter extends React.Component {

  constructor (props) {
    super(props)
    this.state = {editOptions: [{iconName: "slideshow", active:true}, {iconName: "crop", active:false}, {iconName: "add-circle", active:false}]}
  }

  renderOptions() {
      return this.state.editOptions.map((item, index) => {
          return (
            <Button active={item.active} onPress={this.changeSelectedOption(item, index)}>
              <Icon name={item.iconName}/>
            </Button>
          );
      });
  }

  changeSelectedOption(itemProp, index) {
      this.state.editOptions[index].active = false
  }

  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            {this.renderOptions()}
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
