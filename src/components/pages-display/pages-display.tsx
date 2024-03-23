import { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { color_main } from "../../variables";

interface PagesDisplayProps {
  currentPage: number;
  pagesCount: number;
}

//component for display all available pages and highliting current page
const PagesDisplay: FunctionComponent<PagesDisplayProps> = ({
  currentPage,
  pagesCount,
}) => {
  let arr: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    arr.push(i);
  }

  return (
    <View style={styles.container}>
      {arr.map((item) => (
        <View>
          <Text style={item === currentPage ? styles.currentItem : styles.item}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PagesDisplay;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 50,
    justifyContent: "center",
    marginVertical: 14,
  },
  item: {
    fontSize: 22,
  },
  currentItem: {
    fontSize: 22,
    color: color_main,
  },
});
