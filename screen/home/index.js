import { Box, Image, Text, View, useTheme } from "native-base";
import { StyleSheet } from "react-native";

function Home() {
  const theme = useTheme();
  return (
    <View padding={5} paddingTop={10}>
      <Box style={styles.border} paddingTop={3}>
        <Box style={styles.border} width={"35%"}>
          <Text bold fontSize={25} >Hi, Radif</Text>
          <Text color={"color.red"}>200 Lists</Text>
        </Box>
        <Box>
            {/* <Image source={} */}
        </Box>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "solid",
  },
});

export default Home;
