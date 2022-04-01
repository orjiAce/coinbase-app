import React from "react";
import {
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "./Components/CoinbaseClone/onboarding/Onboarding";
import CreateUsername from "./Components/CoinbaseClone/onboarding/CreateUsername";
import RecoveryPhrase from "./Components/CoinbaseClone/onboarding/RecoveryPhrase";
import Dashboard from "./Components/CoinbaseClone/DashBoard";

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="CreateUsername"
          component={CreateUsername}
          options={{ headerShown: true, headerStyle:{
              shadowColor:'transparent',
          }, headerBackTitle:'Back', headerTitle:'' }}
        />

          <Stack.Screen
          name="RecoveryPhrase"
          component={RecoveryPhrase}
          options={{ headerShown: true, headerStyle:{
              shadowColor:'transparent',
          }, headerBackTitle:'Back', headerTitle:'' }}
        />

          <Stack.Screen name={'Dashboard'}
                        component={Dashboard}
                        options={{
                            headerShown:false
                        }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
