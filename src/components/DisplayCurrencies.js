import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { CurrencyStatsModal } from './CurrencyStatsModal';

export const DisplayCurrencies = ({
  isLoading,
  data,
  showModal,
  setSelectedProduct
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
    <>
      <FlatList
        testID="DisplayCurrencies"
        data={data}
        renderItem={({ item }) => 
          <TouchableOpacity
            testID={item.id}
            key={item.id}
            onPress={() => setSelectedProduct(item)}
          >
            <Text>
              {item.display_name}
            </Text>
          </TouchableOpacity>
        }
        keyExtractor={item => item.id}
      />
      <CurrencyStatsModal showModal={showModal} />
    </>
  );
}
