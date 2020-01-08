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
      <FlatList
        testID="DisplayCurrencies"
        data={data}
        renderItem={({ item }) => 
          <TouchableOpacity
            testID={item.id}
            key={item.id}
            onPress={() => toggleModal(true)}
          >
            <Text>
              {item.display_name}
            </Text>
          </TouchableOpacity>
        }
        keyExtractor={item => item.id}
      />
      <Modal
        testID="modal"
        animationType="slide"
        visible={showModal}
      />
    </>
  );
}
