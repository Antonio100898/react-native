import { FunctionComponent } from "react";
import { IImage } from "../../models/IImage";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";

interface ImagesListProps {
  images: IImage[];
  onImageClick: (id: number) => void;
}

const ImagesList: FunctionComponent<ImagesListProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <FlatList
      alwaysBounceVertical={false}
      numColumns={3}
      data={images}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Pressable onPress={() => onImageClick(item.id)}>
          <Image
            style={styles.image}
            source={{
              uri: item.webformatURL,
            }}
          />
        </Pressable>
      )}
    />
  );
};

export default ImagesList;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
