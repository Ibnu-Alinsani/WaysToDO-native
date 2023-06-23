import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  Text,
  View,
  useTheme,
} from "native-base";
import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import * as IMG from "../../assets";
import todoContext from "../../context/todoContext";
import { styles } from "../landing-page";

function Login({ navigation }) {
  const theme = useTheme();
  const { register } = useContext(todoContext);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser() {
    register(
      (payload = {
        firstName,
        email,
        password,
      })
    );
  }

  return (
    <View style={styles.container}>
      <Box marginTop={30}>
        <Image source={IMG.login} alt="Login" />
      </Box>
      <Box width={"85%"} marginTop={-10}>
        <Text bold fontSize={25} style={{ fontWeight: "bold" }} mb="4">
          Register
        </Text>

        <FormControl mb="5" style={styles.Input}>
          <Input
            placeholder="Name"
            background={"color.grey"}
            onChangeText={(e) => setFirstName(e)}
          />
        </FormControl>

        <FormControl mb="5" style={styles.Input}>
          <Input
            placeholder="Email"
            background={"color.grey"}
            onChangeText={(e) => setEmail(e)}
          />
        </FormControl>

        <FormControl style={styles.Input}>
          <Input
            placeholder="Password"
            background={"color.grey"}
            onChangeText={(e) => setPassword(e)}
          />
        </FormControl>
      </Box>
      <Box width={"85%"} marginTop={-50}>
        <Button background={"color.red"} onPress={registerUser}>
          Register
        </Button>
        <Box display={"flex"} justifyContent={"center"} flexDirection={"row"}>
          <Text margin={"auto"} marginTop={5}>
            Joined Us Before ?{" "}
            <Text
              bold
              color={"color.red"}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </Text>
        </Box>
      </Box>
    </View>
  );
}

const border = StyleSheet.create({
  border: {
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "solid",
  },
});

export default Login;
