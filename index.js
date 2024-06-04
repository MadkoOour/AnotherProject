/**
 
Sample React Native App
https://github.com/facebook/react-native
*
@format
*/

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyStack from './App';
import Flex from './Flex';

AppRegistry.registerComponent(appName, () => Flex);
