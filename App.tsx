import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Calculator from './Calculator';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Calculator />
    </SafeAreaView>
  );
}

export default App;
