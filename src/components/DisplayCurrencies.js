import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  FlatList
} from 'react-native';

export const DisplayCurrencies = ({
  isLoading,
  data,
  showModal,
  toggleModal
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
      <View testID="DisplayCurrencies">
        {data.map((currency) => {
          return(
            <TouchableOpacity
              key={currency.id}
              testID={currency.id}
              onPress={() => toggleModal(true)}
            >
              <Text>
                {currency.display_name}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <Modal
        testID="modal"
        animationType="slide"
        visible={showModal}
      />
    </>
  );
}
