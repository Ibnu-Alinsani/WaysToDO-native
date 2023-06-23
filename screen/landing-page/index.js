import {
  Box,
  Button,
  Image,
  StatusBar,
  Text,
  View,
  useTheme,
} from "native-base";
import { StyleSheet } from "react-native";
import * as IMG from "../../assets";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 90,
  },
  Input: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    marginLeft: 1
  },
  border: {
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "solid",
  },
});

function LandingPage({ navigation }) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Image source={IMG.home} alt="WaysToDO" />
        <Image source={IMG.waystodo} alt="..." />
        <Text
          style={{ marginTop: 25, textAlign: "center" }}
        >
          {`Write your activity and finish your activity \n Fast, Simple, and Easy to Use`}
        </Text>
      </Box>
      <Box style={{ width: "85%", marginBottom: -125 }}>
        <Button
          onPress={() => navigation.navigate("Login")}
          background={"color.red"}
        >
          Login
        </Button>
        <Button
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 10 }}
          background={"color.grey"}
        >
          Register
        </Button>
      </Box>
      <StatusBar style="auto" />
    </View>
  );
}

export default LandingPage;
