import {
  Text,
  View,
  useTheme,
  FormControl,
  Input,
  Button,
  Box,
  FlatList,
} from "native-base";
import { styles } from "../landing-page";
import { useState, useEffect } from "react";
import { API } from "../../lib/kontenbase";

function AddCategory() {
  const [name, setCategory] = useState("");
  const [categoryGroup, setCategoryGroup] = useState([]);

  async function findCategory() {
    const { data, error } = await API.get("/category");

    if (error) {
      alert(error);
      return;
    }

    setCategoryGroup(data);
  }

  useEffect(() => {
    findCategory();
  }, []);

  async function addCategory() {
    const { error } = await API.post("/category", {
      name,
    });

    if (error) {
      alert(error);
      return;
    }

    alert("Add Success");
  }

  const theme = useTheme();
  return (
    <View padding={5} paddingTop={"16"}>
      <Text fontSize={25} style={{ fontWeight: "800" }}>
        Add Category
      </Text>
      <FormControl mb="5" mt="5" style={styles.Input}>
        <Input
          placeholder="Name"
          background={"color.grey"}
          onChangeText={(e) => setCategory(e)}
        />
      </FormControl>
      <Button background={"color.red"} mt="2" onPress={addCategory}>
        Add
      </Button>

      <Box paddingTop={10}>
        <Text fontSize={25} style={{ fontWeight: "800" }}>
          List Category
        </Text>
        <Box display={"flex"} flexDirection={"row"} style={{ gap: 10 }} mt={5}>
          <FlatList
            data={categoryGroup}
            renderItem={({ item }) => {
              return (
                <Text
                  style={{ backgroundColor: "pink", fontWeight: "800" }}
                  px={5}
                  py={1}
                  width={"30%"}
                  borderRadius={5}
                  color={"white"}
                >
                  {item.name}
                </Text>
              );
            }}
            keyExtractor={(item) => item._id}
          />
        </Box>
      </Box>
    </View>
  );
}

export default AddCategory;
