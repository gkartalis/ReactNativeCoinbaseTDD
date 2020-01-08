import React from 'react';
import {Modal, ActivityIndicator} from 'react-native';
import useDataFetching from '../customHooks/useDataFetching';
import {API_URL} from '../constants/api';
import {ModalBody} from './ModalBody';

export const CurrencyStatsModal = ({
  displayName,
  showModal,
  selectedProduct,
  setSelectedProduct
}) => {
  const {
    data,
    isLoading,
    errorMessage
  } = useDataFetching(`${API_URL}/products/${selectedProduct.id}/stats`);
  return (
    <Modal
      testID="modal"
      animationType="slide"
      visible={showModal}
    >
      <ModalBody
        displayName={displayName}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        setSelectedProduct={setSelectedProduct}
      />
    </Modal>
  );
}
