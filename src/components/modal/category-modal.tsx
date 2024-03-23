import { FunctionComponent, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../app-button/app-button";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { setCategory } from "../../redux/slices/app-slice";
import { Category } from "../../models/category";
import AppRadioButton from "../app-radio-button/app-radio-button";
import AppModal from "./modal";

interface CategoryModalProps {
  open: boolean;
  onClose: () => void;
}

const CategoryModal: FunctionComponent<CategoryModalProps> = ({
  open,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector((state) => state.app);
  const [selectedValue, setSelectedValue] = useState(category);

  //handles selected category
  const onRadioPress = (val: Category) => {
    setSelectedValue(val);
  };

  //dispatches selected category to redux store and closes modal
  const applyCategory = () => {
    dispatch(setCategory(selectedValue));
    onClose();
  };

  const categories = [
    {
      value: Category.ANIMALS,
    },
    {
      value: Category.FASHION,
    },
    {
      value: Category.HOME,
    },
    {
      value: Category.SPORT,
    },
    {
      value: Category.TRAVEL,
    },
    {
      value: Category.WORK,
    },
    {
      value: Category.NONE,
    },
  ];
  return (
    <AppModal onDismiss={onClose} visible={open}>
      <Text style={styles.header}>Select Category</Text>
      <View style={styles.radio_group}>
        {categories.map((cat) => (
          <AppRadioButton
            key={cat.value}
            selectedValue={selectedValue}
            label={cat.value ? cat.value : "none"}
            onPress={onRadioPress}
            value={cat.value}
          />
        ))}
      </View>
      <View style={styles.button_container}>
        <AppButton
          disabled={selectedValue === category}
          onPress={applyCategory}
          text="Apply"
        />
      </View>
    </AppModal>
  );
};

export default CategoryModal;

const styles = StyleSheet.create({
  radio_group: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
  },
  button_container: {
    width: "50%",
    alignSelf: "center",
  },
});
