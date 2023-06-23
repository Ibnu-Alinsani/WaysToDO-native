import {
  Button,
  FormControl,
  Input,
  Select,
  Text,
  TextArea,
  View,
} from "native-base";
import { useContext, useEffect, useState } from "react";
import { styles } from "../landing-page";
import todoContext from "../../context/todoContext";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function AddList() {
  const { findCategory, category, createList } = useContext(todoContext);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [valueDate, setValueDate] = useState("");
  const [payload, setPayload] = useState({
    name: "",
    category: [],
    date: "",
    description: "",
  });

  useEffect(() => {
    findCategory();
  }, []);

  function addList() {
    createList(payload);
  }

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <View pt={"16"} px={5}>
      <Text fontSize={25} style={{ fontWeight: 800, marginBottom: 20 }}>
        Add List
      </Text>
      <FormControl style={styles.Input}>
        <Input
          placeholder="Name"
          name="name"
          onChangeText={(name) => setPayload({ ...payload, name })}
        />
      </FormControl>

      <FormControl style={styles.Input} mt={5}>
        <Select
          minWidth="200"
          placeholder="Choose Category"
          onValueChange={(category) => setPayload({ category : [category] })}
        >
          {category?.map((e, idx) => {
            return <Select.Item label={e.name} value={e._id} key={idx} />;
          })}
        </Select>
      </FormControl>
      <FormControl style={styles.Input} marginTop={5}>
        <Input
          placeholder="Date"
          value={valueDate}
          onPressIn={() => setShow(true)}
          onChangeText={(date) => setPayload({ ...payload, date })}
        />
      </FormControl>

      <View w="100%" style={styles.Input} mt={5}>
        <TextArea
          h={20}
          placeholder="Description"
          w="100%"
          onChangeText={(description) =>
            setPayload({ ...payload, description })
          }
        />
      </View>

      <Button background={"color.red"} mt={5} onPress={addList}>
        Add
      </Button>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <DateTimePickerModal
          isVisible={show}
          mode="date"
          date={date}
          onConfirm={(date) => {
            setShow(false);
            setDate(date);
            const formatDate = `${day[date.getDay()]}, ${date.getDate()} ${
              month[date.getMonth()]
            } ${date.getFullYear()}`;

            setPayload({
              ...payload,
              date: formatDate,
            });

            setValueDate(
              `${day[date.getDay()]}, ${date.getDate()} ${
                month[date.getMonth()]
              } ${date.getFullYear()}`
            );
          }}
          onCancel={() => setShow(false)}
        />
      </View>
    </View>
  );
}

export default AddList;
