import React, {Component} from 'react';
import {StyleProvider} from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import App from '../App';

export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <App />
      </StyleProvider>
    );
  }
}
