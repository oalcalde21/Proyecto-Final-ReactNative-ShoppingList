import { Modal as RNmodal, StyleSheet, Text, View } from "react-native";

import Button from "../Button/Button";
import React from "react";
import {styles} from './styles'

const Modal = ({modalVisible, selectedItem, onCancelModal, onDeleteModal}) => {
  return (
    <>
    <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Move Item</Text>
          <Text style={styles.modalText}>
            Do you want to move this item{" "}
            <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>to the Purchased Item List?
          </Text>
          <View style={styles.modalActions}>
            <Button styleButtonType={styles.buttonCancel} title="Cancel" onPress={onCancelModal}/>
            <Button styleButtonType={styles.buttonDelete} titleStyle={styles.text} title="Move" onPress={() => {
                onDeleteModal(selectedItem.id, selectedItem);
              }}
            />
          </View>
        </View>
      </View>
    </RNmodal>
    </>
  );
};

export default Modal;
