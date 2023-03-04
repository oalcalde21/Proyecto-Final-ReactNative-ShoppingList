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
          <Text style={styles.modalTitle}>Eliminar Item</Text>
          <Text style={styles.modalText}>
            ¿Desea eliminar el item de la lista{" "}
            <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
          </Text>
          <View style={styles.modalActions}>
            <Button styleButtonType={styles.buttonCancel} title="Cancelar" onPress={onCancelModal}/>
            <Button styleButtonType={styles.buttonDelete} title="Eliminar" onPress={() => {
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
