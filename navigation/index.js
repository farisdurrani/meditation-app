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
  BeginChooseWord,
  FocusedMeditation,
  SettingPage,
  FavoriteList,
  Guided,
  Breathing,
  BeginScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="BeginScreen"
          component={BeginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Breathing"
          component={Breathing}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Guided"
          component={Guided}
        />
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
          name="BeginChooseWord"
          component={BeginChooseWord}
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
