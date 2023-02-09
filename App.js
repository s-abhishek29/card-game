import {StatusBar} from 'react-native';
import React from 'react';
import Navigations from './src/screens/Dashboard/index';
// import GlobalColors from './App/Helper/GlobalColors';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={'#f9f9f9'}
        translucent={false}
      />
      <Navigations />
    </>
  );
};

export default App;
