import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrderListScreen from "./src/components/OrderList";
import AddOrderScreen from "./src/components/AddOrder";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OrderList"
          options={ {
            title: "Orders",
            headerStyle: { backgroundColor: "#2C2C2C" },
            headerTitleStyle: { color: "#fff" },
            headerTitleAlign: "center"
          } }
          component={ OrderListScreen }
        />
        <Stack.Screen
          name="AddOrder"
          options={ {
            title: "Add Order",
            headerStyle: { backgroundColor: "#2C2C2C" },
            headerTintColor: "#fff",
            headerTitleStyle: { color: "#fff" },
            headerTitleAlign: "center"
          } }
          component={ AddOrderScreen }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;