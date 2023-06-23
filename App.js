import {
  Montserrat_400Regular,
  Montserrat_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/dev";
import { NativeBaseProvider, extendTheme } from "native-base";
import { ActivityIndicator } from "react-native";
import Container from "./container";
import { StyleSheet } from "react-native";
import TodoState from "./context/todoState";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_800ExtraBold,
  });

  const fontConfig = {
    Montserrat: {
      400: "Montserrat_400Regular",
    },
    MontserratBold: {
      800: "Montserrat_800ExtraBold",
    },
  };

  const customColor = {
    color: {
      red: "#FF5555",
      grey: "rgba(0, 0, 0, 0.31)",
      orange: "#FFB681",
      pink: "#FF8181",
      blue: "#81C8FF",
    },
  };

  const theme = extendTheme({
    colors: customColor,
    fontConfig: fontConfig,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}
