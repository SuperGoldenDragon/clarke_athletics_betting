/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/views/Splash';
import SelectLoginMode from './src/views/auth/SelectLoginMode';
import Login from './src/views/auth/Login';
import Signup from './src/views/auth/Signup';
import AppMain from './src/views/main/AppMain';
import HomeBlogs from './src/views/main/home/HomeBlogs';
import MatchDetail from './src/views/main/wager/MatchDetail';

const Stack = createStackNavigator();

function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Select Login" component={SelectLoginMode} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Sign up" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={AppMain} options={{ headerShown: false }} />
                <Stack.Screen name="Home Blogs" component={HomeBlogs} options={{ headerShown: false }} />
                <Stack.Screen name="Match Detail" component={MatchDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

AppRegistry.registerComponent(appName, () => App);
