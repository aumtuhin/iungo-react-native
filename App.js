import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import AuthStack from "./Stacks/AuthStack";
import { firstLaunch } from "./shared/conts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FocusedStatusBar from './components/FocusedStatusBar';

export default function App() {
  const [user, setUser] = useState({});
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(async () => {
    try {
      const result = await AsyncStorage.getItem(firstLaunch);
      setIsFirstLaunch(result);
      if (!result) {
        await AsyncStorage.setItem(firstLaunch, "true");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <NavigationContainer>
      <FocusedStatusBar />
      <AuthStack isFirstLaunch={isFirstLaunch} />
    </NavigationContainer>
  );
}
