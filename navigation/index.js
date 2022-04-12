import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
  HomeScreen,
  LoginScreen,
  WelcomePage,
  RegisterScreen,
  CurrentScore,
  FocusedInfo,
  SquareInfo
} from "../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>   
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
