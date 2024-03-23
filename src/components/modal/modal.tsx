import { FunctionComponent, ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Modal } from "react-native-paper";
import { color_white } from "../../variables";

interface AppModalProps {
  onDismiss: () => void;
  visible: boolean;
  children: ReactNode;
}

const AppModal: FunctionComponent<AppModalProps> = ({
  onDismiss,
  visible,
  children,
}) => {
  return (
    <Modal
      contentContainerStyle={styles.modal_content}
      visible={visible}
      onDismiss={onDismiss}
    >
      {children}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal_content: {
    backgroundColor: color_white,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    gap: 20,
  },
});

export default AppModal;
