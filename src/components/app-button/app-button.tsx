import { FunctionComponent } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { color_main } from "../../variables";

interface AppButtonProps {
  text?: string;
  onPress?: () => void;
  disabled?: boolean;
}

const AppButton: FunctionComponent<AppButtonProps> = ({
  text,
  disabled,
  onPress,
}) => {
  const styles = StyleSheet.create({
    button: {
      padding: 20,
      backgroundColor: color_main,
      borderRadius: 6,
      opacity: disabled ? 0.3 : 1,
    },
    button_text: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
    },
  });
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        { transform: [{ scale: pressed ? 0.97 : 1 }] },
      ]}
    >
      <Text style={styles.button_text}>{text}</Text>
    </Pressable>
  );
};

export default AppButton;
