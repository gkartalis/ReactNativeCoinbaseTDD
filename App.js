import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {DisplayCurrencies} from './src/components/DisplayCurrencies';
import useDataFetching from './src/customHooks/useDataFetching';
import {API_URL} from './src/constants/api';
import {isObjectEmpty} from './src/utils/isObjectEmpty';

const App = () => {
  const { data, isLoading, errorMessage } = useDataFetching(`${API_URL}/products`);
  const [selectedProduct, setSelectedProduct] = useState({});
  return (
    <>
      <SafeAreaView testID="App">
        <DisplayCurrencies
          errorMessage={errorMessage}
          data={data}
          isLoading={isLoading}
          showModal={!isObjectEmpty(selectedProduct)}
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
