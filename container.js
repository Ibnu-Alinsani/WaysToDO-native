import { createStackNavigator } from "@react-navigation/stack";
import * as SCREEN from "./screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoState from "./context/todoState";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function myTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "red",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Add-List") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Add-Category") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          return <Ionicons name={iconName} size={24} color={"red"} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={SCREEN.Home}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen name="Add-List" component={SCREEN.AddList} />
      <Tab.Screen name="Add-Category" component={SCREEN.AddCategory} />
    </Tab.Navigator>
  );
}

function Container() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <TodoState>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen
            name="LandingPage"
            component={SCREEN.LandingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={SCREEN.Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={SCREEN.Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={myTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add-Category"
            component={SCREEN.AddCategory}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add-List"
            component={SCREEN.AddList}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </TodoState>
    </NavigationContainer>
  );
}

export default Container;
