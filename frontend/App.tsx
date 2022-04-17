import React from "react";
import {
    NavigationContainer,
} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Onboarding from "./Components/CoinbaseClone/onboarding/Onboarding";
import CreateUsername from "./Components/CoinbaseClone/onboarding/CreateUsername";
import RecoveryPhrase from "./Components/CoinbaseClone/onboarding/RecoveryPhrase";
import Dashboard from "./Components/CoinbaseClone/DashBoard";
import LegalScreen from "./Components/CoinbaseClone/onboarding/LegalScreen";
import VisibilityScreen from "./Components/CoinbaseClone/onboarding/VisibilityScreen";
import BiometricsScreen from "./Components/CoinbaseClone/onboarding/BiometricScreen";

const Stack = createStackNavigator();

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="CreateUsername"
                    component={CreateUsername}
                    options={{
                        headerShown: true, headerStyle: {
                            shadowColor: 'transparent',
                        }, headerBackTitle: 'Back', headerTitle: ''
                    }}
                />

                <Stack.Screen
                    name="RecoveryPhrase"
                    component={RecoveryPhrase}
                    options={{
                        headerShown: true, headerStyle: {
                            shadowColor: 'transparent',
                        }, headerBackTitle: 'Back', headerTitle: ''
                    }}
                />

                <Stack.Screen name={'Dashboard'}
                              component={Dashboard}
                              options={{
                                  headerShown: false
                              }}
                />
                <Stack.Screen name={'LegalScreen'}
                              component={LegalScreen}
                              options={{
                                  headerShown: true, title: '',
                                  headerBackTitle: '',
                                  headerBackTitleStyle: {
                                      color: '#111',

                                  }, headerStyle: {
                                      shadowColor: 'transparent',
                                  }, headerTitle: ''
                              }}
                />
                <Stack.Screen name={'VisibilityScreen'}
                              component={VisibilityScreen}
                              options={{
                                  headerShown: true, title: '',
                                  headerBackTitle: '',
                                  headerBackTitleStyle: {
                                      color: '#111',

                                  }, headerStyle: {
                                      shadowColor: 'transparent',
                                  }, headerTitle: ''
                              }}
                />
                <Stack.Screen name={'BiometricsScreen'}
                              component={BiometricsScreen}
                              options={{
                                  headerShown: true, title: '',
                                  headerBackTitle: '',
                                  headerBackTitleStyle: {
                                      color: '#111',
                                  }, headerStyle: {
                                      shadowColor: 'transparent',
                                  }, headerTitle: ''
                              }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
