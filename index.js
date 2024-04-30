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
import History from './src/views/history/History';
import Profile from './src/views/profile/Profile';
import BuzzerFeed from './src/views/profile/BuzzerFeed';
import TVSchedule from './src/views/profile/TVSchedule';
import BattleDraft from './src/views/profile/BattleDraft';
import DroppingOdds from './src/views/profile/DroppingOdds';
import Settings from './src/views/profile/Settings';
import LeaguesMatch from './src/views/main/leagues/LeaguesMatch';
import RemoveAd from './src/views/profile/RemoveAd';
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
                <Stack.Screen name="Leagues Match" component={LeaguesMatch} options={{ headerShown: false }} />
                <Stack.Screen name="Home Blogs" component={HomeBlogs} options={{ headerShown: false }} />
                <Stack.Screen name="Match Detail" component={MatchDetail} options={{ headerShown: false }} />
                <Stack.Screen name='History' component={History} options={{ headerShown: false }} />
                <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name='Buzzer' component={BuzzerFeed} options={{ headerShown: false }} />
                <Stack.Screen name='TVSchedule' component={TVSchedule} options={{ headerShown: false }} />
                <Stack.Screen name='Battle' component={BattleDraft} options={{ headerShown: false }} />
                <Stack.Screen name='Dropping' component={DroppingOdds} options={{ headerShown: false }} />
                <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
                <Stack.Screen name='Remove' component={RemoveAd} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

AppRegistry.registerComponent(appName, () => App);
