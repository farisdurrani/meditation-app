import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SquareInfo,
  Exercise3,
  BeginChooseWord,
  BeginScreen,
  Breathing,
  ChooseWordPage,
  CurrentScore,
  DeepInfo,
  Exercise,
  Exercise2,
  Excercise3,
  Exercise4,
  Exercise5,
  Exhale2,
  FavoriteList,
  FocusedInfo,
  FocusedMeditation,
  Guided,
  HomeScreen,
  InhaleHold,
  LoginScreen,
  PromptActivities,
  RegisterScreen,
  SettingPage,
  SquareInfo2,
  SquareInfo3,
  Timer,
  WelcomePage,
} from "../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Excercise3"
          component={Excercise3}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SquareInfo"
          component={SquareInfo}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="WelcomePage"
          component={WelcomePage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Exercise"
          component={Exercise}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Exhale2"
          component={Exhale2}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Exercise2"
          component={Exercise2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Exercise4"
          component={Exercise4}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Exercise5"
          component={Exercise5}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SquareInfo3"
          component={SquareInfo3}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DeepInfo"
          component={DeepInfo}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Timer"
          component={Timer}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SquareInfo2"
          component={SquareInfo2}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="BeginScreen"
          component={BeginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="InhaleHold"
          component={InhaleHold}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="PromptActivities"
          component={PromptActivities}
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
          name="FocusedInfo"
          component={FocusedInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
