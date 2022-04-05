import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  LoginScreen,
  WelcomePage,
  RegisterScreen,
  CurrentScore,
  Timer,
  ChooseWordPage,
  Begin,
  FocusedMeditation,
  SettingPage,
  FavoriteList,
} from "../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="FavoriteList"
          component={FavoriteList}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SettingPage"
          component={SettingPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="FocusedMeditation"
          component={FocusedMeditation}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Begin"
          component={Begin}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ChooseWordPage"
          component={ChooseWordPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="WelcomePage"
          component={WelcomePage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CurrentScore"
          component={CurrentScore}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Timer"
          component={Timer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
