import React from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';

export const ModalBody = ({
  isLoading,
  errorMessage,
  data,
  setSelectedProduct,
  displayName
}) => {
  return (
    <View
      testID="modal-body"
      style={{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
      }}
    >
      {!!isLoading && <ActivityIndicator testID="modal-loader" size="large" />}
      {!isLoading && errorMessage !== '' &&
      <Text testID="modal-error-message">
        {errorMessage}
      </Text>
      }
      {Object.keys(data).length > 0 && <Text>{displayName}</Text>}
      {
        Object.keys(data)
          .map(key =>
            <Text testID={key} key={key}>
              {`${key}: ${data[key] || ''}`}
            </Text>
          )
      }
      <Button
        testID="close-button"
        onPress={() => setSelectedProduct({})}
        title="Close"
      />
    </View>
  );
}
