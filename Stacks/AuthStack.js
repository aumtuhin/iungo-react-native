import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";
import OnboardScreen from "../Screens/OnboardScreen";
import CameraScreen from "../Screens/CameraScreen";
import AppStack from "./AppStack";
import InboxScreen from "../Screens/InboxScreen";
import CommentsScreen from "../Screens/CommentsScreen";

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
        name="Camera"
        component={CameraScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="App"
        component={AppStack}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="Inbox"
        component={InboxScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
