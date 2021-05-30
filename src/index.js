import React, {Component} from 'react';
import {moduleName, View} from 'react-native';
import {ModalPortal} from 'react-native-modals';
import App from '../App';
export default function MyApp() {
  return (
    <React.Fragment>
      <App />
      <ModalPortal />
    </React.Fragment>
  );
}
