import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Main from "./src/main";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </Provider>
  );
}
