import React, {useState} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {DisplayCurrencies} from './src/components/DisplayCurrencies';
import useDataFetching from './src/customHooks/useDataFetching';
import {API_URL} from './src/constants/api';

const App = () => {
  const { data, isLoading, errorMessage } = useDataFetching(`${API_URL}/products`);
  const [showModal, toggleModal] = useState(false);
  return (
    <>
      <SafeAreaView testID="App" style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <DisplayCurrencies
          errorMessage={errorMessage}
          data={data}
          isLoading={isLoading}
          showModal={showModal}
          toggleModal={toggleModal}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
