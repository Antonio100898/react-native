import { FunctionComponent } from "react";
import { IImage } from "../../models/IImage";
import AppModal from "./modal";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface ImageModalProps {
  open: boolean;
  onClose: () => void;
  image: IImage;
}

const ImageModal: FunctionComponent<ImageModalProps> = ({
  image,
  onClose,
  open,
}) => {
  return (
    <AppModal onDismiss={onClose} visible={open}>
      <Text style={styles.header}>Image info</Text>
      <ScrollView alwaysBounceVertical={false} style={styles.container}>
        {Object.keys(image).map((key) => {
          const imageKey: keyof IImage = key as keyof IImage;
          return (
            <View style={styles.item} key={key}>
              <Text style={styles.item_text}>
                <Text style={styles.label}>{imageKey}: </Text>
                <Text>{image[imageKey]}</Text>
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </AppModal>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  container: {
    maxHeight: 400,
  },
  item: {
    marginVertical: 5,
  },
  item_text: {
    fontSize: 18,
  },
  header: {
    fontSize: 20,
    textAlign: "center",
  },
  label: {
    fontWeight: "bold"
  }
});
