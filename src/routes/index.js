import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TabRoutes from "./tab.routes";
import Login from "../screens/Login";

export default function Routes() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="TabRoutes" component={TabRoutes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
