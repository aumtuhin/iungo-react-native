import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./AppStack";
import InboxScreen from "../Screens/InboxScreen";
import CameraScreen from "../Screens/CameraScreen";
import CommentsScreen from "../Screens/CommentsScreen";
import CurrentUserProfileScreen from "../Screens/CurrentUserProfileScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AppStack"
        component={AppStack}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="Inbox"
        component={InboxScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="UserProfile"
        component={CurrentUserProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
