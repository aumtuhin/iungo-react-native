import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import AddPostScreen from "../Screens/AddPostScreen";
import SearchScreen from "../Screens/SearchScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 70 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={25} color="black" />
            ) : (
              <Entypo name="home" size={24} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 70 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="search" size={25} color="black" />
            ) : (
              <Feather name="search" size={25} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPostScreen}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 70 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="add-circle-outline" size={40} color="black" />
            ) : (
              <Ionicons name="add-circle-outline" size={40} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 70 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="notifications-outline" size={25} color="black" />
            ) : (
              <Ionicons name="notifications-outline" size={25} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 70 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="user" size={25} color="black" />
            ) : (
              <Feather name="user" size={25} color="grey" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
