import HomeStack from "./HomeNavigation";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigaton from "./TabsNavigation";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigaton />
    </NavigationContainer>
  );
};

export default AppNavigator;