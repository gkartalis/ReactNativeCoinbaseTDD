import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import {DisplayCurrencies} from './src/components/DisplayCurrencies';

const App = () => {
  const [showModal, toggleModal] = useState(false);
  return (
    <>
      <SafeAreaView testID="App" style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <DisplayCurrencies data={[]} isLoading={true} showModal={showModal} toggleModal={toggleModal} />
      </SafeAreaView>
    </>
  );
};

export default App;
