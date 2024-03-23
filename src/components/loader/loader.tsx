import { FunctionComponent } from "react";
import { ActivityIndicator } from "react-native-paper";
import { color_main } from "../../variables";

const Loader: FunctionComponent = () => {
  return <ActivityIndicator size="large" animating={true} color={color_main} />;
};

export default Loader;
