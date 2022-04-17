import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";
import OnboardScreen from "../Screens/OnboardScreen";
import CameraScreen from "../Screens/CameraScreen";
import HomeScreenStack from "./HomeScreenStack";

const Stack = createNativeStackNavigator();

export default function AuthStack({ isFirstLaunch }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isFirstLaunch ? null : (
        <Stack.Screen name="Onboarding" component={OnboardScreen} />
      )}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen
        name="HomeScreenStack"
        component={HomeScreenStack}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}
