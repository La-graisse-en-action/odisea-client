import { withExpoSnack } from "nativewind";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { screens } from "./screens";
import { modals } from "./screens/modals";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          {screens.map((screen) => (
            <Stack.Screen
              key={screen.name}
              options={{
                headerShown: false,
              }}
              name={screen.name}
              component={screen.component}
            />
          ))}
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: "modal",
          }}
        >
          {modals.map((modal) => (
            <Stack.Screen
              key={modal.name}
              name={modal.name}
              component={modal.component}
              options={modal.options}
            />
          ))}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withExpoSnack(App);
