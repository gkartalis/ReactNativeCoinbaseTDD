import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { CurrencyStatsModal } from './CurrencyStatsModal';
import {isObjectEmpty} from '../utils/isObjectEmpty';

export const DisplayCurrencies = ({
  isLoading,
  data,
  setSelectedProduct,
  selectedProduct
}) => {
  if (isLoading) {
    return (
      <ActivityIndicator testID="loader" size="large" />
    );
  }
  if (!isLoading && data.length === 0) {
    return (
      <Text>
        No available data, try later.
      </Text>
    )
  }
  return (
    <View>
      <FlatList
        testID="DisplayCurrencies"
        data={data}
        renderItem={({ item }) => 
          <TouchableOpacity
            style={{ margin: 5, padding: 5, borderRadius: 20, borderColor: 'black', borderWidth: 1}}
            testID={item.id}
            key={item.id}
            onPress={() => setSelectedProduct(item)}
          >
           {
            Object.keys(item).map((key, index) =>
              <Text testID={item.id + index} key={`${key}: ${item[key] || '-'}`}>
                {`${key}: ${item[key] || '-'}`}
              </Text>
            )}
          </TouchableOpacity>
        }
        keyExtractor={item => item.id}
      />
      {!isObjectEmpty(selectedProduct) &&
        <CurrencyStatsModal
          displayName={selectedProduct.display_name}
          showModal={!isObjectEmpty(selectedProduct)}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />}
    </View>
  );
}
