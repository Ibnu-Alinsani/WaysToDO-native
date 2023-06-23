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
import * as IMG from "../../assets";
import { styles } from "../landing-page";
import { useContext, useState } from "react";
import todoContext from "../../context/todoContext";

function Login({ navigation }) {
  const { login } = useContext(todoContext);

  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    login(
      (payload = {
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
          Login
        </Text>
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
        <Button background={"color.red"} onPress={loginUser}>
          Login
        </Button>
        <Box display={"flex"} justifyContent={"center"} flexDirection={"row"}>
          <Text margin={"auto"} marginTop={5}>
            New Users ?{" "}
            <Text
              bold
              color={"color.red"}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Text>
          </Text>
        </Box>
      </Box>
    </View>
  );
}

export default Login;
