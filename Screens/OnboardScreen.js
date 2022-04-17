import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardScreen({ navigation }) {
  return (
    <Onboarding
      onDone={() => navigation.navigate('Login')}
      onSkip={() => navigation.navigate('Login') }
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("./images/1.png")} />,
          title: "Welcome",
          subtitle: "Exxplore the world of good people.",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("./images/2.png")} />,
          title: "Have a break",
          subtitle: "Have a seat, have a bite and enjoy.",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("./images/3.png")} />,
          title: "Send some gifts",
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  );
}
