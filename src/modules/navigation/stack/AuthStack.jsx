import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Login from "../../auth/adapters/screens/Login";
import CreateAccount from "../../auth/adapters/screens/CreateAccount";
import UserGuest from "../../auth/adapters/screens/UserGuest";
import HomeStack from "./HomeStack";


const Stack = createStackNavigator();

export default function AuthStack({navigation, setUserLoggedIn }) {
    return (

        <Stack.Navigator initialRouteName="Login">
           <Stack.Screen
                name="Login"
                options={{ title: '' }}
            >
                {(props) => <Login {...props} setUserLoggedIn={setUserLoggedIn} navigation={navigation} />}
            </Stack.Screen>

            <Stack.Screen
                name="CreateAccount"
                options={{ title: 'Crear Cuenta' }}
            >
                {(props) => <CreateAccount {...props} setUserLoggedIn={setUserLoggedIn} navigation={navigation} />}
            </Stack.Screen>

            <Stack.Screen
                name="UserGuest"
                component={UserGuest}
                options={{ title: 'Bienvenido' }}
            />

        </Stack.Navigator>

    )
}
