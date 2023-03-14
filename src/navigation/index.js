import HomeStack from "./home";
import { NavigationContainer } from "@react-navigation/native";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppNavigator;