/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyApp from './src';
// import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';
// MessageQueue.spy(true);
AppRegistry.registerComponent(appName, () => MyApp);
