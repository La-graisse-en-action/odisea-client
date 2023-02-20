import { withExpoSnack } from "nativewind";
import WelcomePage from "./pages/welcome";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="welcome"
          component={WelcomePage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="login"
          component={LoginPage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="register"
          component={RegisterPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withExpoSnack(App);
