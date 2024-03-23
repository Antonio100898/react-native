import { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { Category } from "../../models/category";

interface AppRadioButtonProps {
  value: Category;
  selectedValue: Category;
  onPress: (val: Category) => void;
  label: string;
}

const AppRadioButton: FunctionComponent<AppRadioButtonProps> = ({
  value,
  selectedValue,
  onPress,
  label,
}) => {
  const styles = StyleSheet.create({
    radioButton: {
      flexDirection: "row",
      alignItems: "center",
      width: "50%",
    },
    radioLabel: {
      marginLeft: 8,
      fontSize: 16,
      color: "#333",
    },
  });
  return (
    <View style={styles.radioButton}>
      <RadioButton.Android
        value={value}
        status={selectedValue === value ? "checked" : "unchecked"}
        onPress={() => onPress(value as Category)}
        color="#007BFF"
      />
      <Text style={styles.radioLabel}>{label}</Text>
    </View>
  );
};

export default AppRadioButton;
