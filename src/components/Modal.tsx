import React from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Color } from '../assets/Color';
import { LABEL } from '../constant/constant';
import CustomButton from './CustomButton';

type Props = {
  title: string;
  visible: boolean;
  onClose: () => void;
  InnerContent: React.ReactNode;
  BottomContent: React.ReactNode;
};

export default function CommonModal(props: Props) {
  const { title, visible, onClose, InnerContent, BottomContent } = props;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <ScrollView
        style={styles.modalContainer}
        contentContainerStyle={styles.flexCenter}
      >
        <View style={styles.title}>
          <View style={styles.flexRowCenter}>
            <Text style={styles.modalTitle}>{title}</Text>
            <View style={styles.closeBtn}>
              <CustomButton title={LABEL.CLOSE} onPress={onClose} />
            </View>
          </View>

          {InnerContent && <InnerContent />}
        </View>

        {BottomContent && <BottomContent />}
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: Color.black,
    marginHorizontal: '5%',
    marginVertical: '5%',
    borderRadius: 15,
    height: '80%',
    width: '90%',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },
  modalContainer: {
    height: '100%',
    borderWidth: 1,
    backgroundColor: Color.black_2,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  close: {
    color: Color.primary,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.white,
  },
  closeBtn: { alignSelf: 'flex-end' },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
