import { useDispatch, useSelector } from "react-redux";

import HomeStack from "./HomeNavigation";
import LogInNavigation from "./LogInNavigation";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabsNavigation from "./TabsNavigation";

const AppNavigator = () => {

  const isAuth = useSelector(state => state.auth.userId);
  
  return (
    <NavigationContainer>
       {isAuth ? <TabsNavigation /> : <LogInNavigation />}
       {/* <TabsNavigation /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;