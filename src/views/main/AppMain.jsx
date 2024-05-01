import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import NavigationContext from '../../components/NavigationContext';
import { useNavigation } from '@react-navigation/native';
import CustomSidebar from './CustomSidebar';
import History from '../history/History';
import Profile from '../profile/Profile';
import BuzzerFeed from '../profile/BuzzerFeed';
import Subscribe from '../profile/Subscribe';
import TVSchedule from '../profile/TVSchedule';
import BattleDraft from '../profile/BattleDraft';
import DroppingOdds from '../profile/DroppingOdds';
import Settings from '../profile/Settings';
import RemoveAd from '../profile/RemoveAd';
import WhatsNew from '../profile/WhatsNew';
import LeaguesMatch from './leagues/LeaguesMatch';
import HomeBlogs from './home/HomeBlogs';
import MatchDetail from './wager/MatchDetail';
import TeamDetail from '../teamdetail/TeamDetail';

const Drawer = createDrawerNavigator();

const AppMain = () => {
    const parentNavigation = useNavigation();

    const toParent = (route, params = {}) => {
        parentNavigation.navigate(route, params);
    };

    return (
        <NavigationContainer independent={true}>
            <NavigationContext.Provider value={{ parentNavigation, toParent }}>
                <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomSidebar {...props} />}>
                    <Drawer.Screen name="Main" component={BottomNavigation} options={{ headerShown: false }} />
                    <Drawer.Screen name='History' component={History} options={{ headerShown: false }} />
                    <Drawer.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
                    <Drawer.Screen name='Buzzer' component={BuzzerFeed} options={{ headerShown: false }} />
                    <Drawer.Screen name='RemoveAd' component={Subscribe} options={{ headerShown: false }} />
                    <Drawer.Screen name='TVSchedule' component={TVSchedule} options={{ headerShown: false }} />
                    <Drawer.Screen name='Battle' component={BattleDraft} options={{ headerShown: false }} />
                    <Drawer.Screen name='Dropping' component={DroppingOdds} options={{ headerShown: false }} />
                    <Drawer.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
                    <Drawer.Screen name='Remove' component={RemoveAd} options={{ headerShown: false }} />
                    <Drawer.Screen name='New' component={WhatsNew} options={{ headerShown: false }} />
                    <Drawer.Screen name="Leagues Match" component={LeaguesMatch} options={{ headerShown: false }} />
                    <Drawer.Screen name="Home Blogs" component={HomeBlogs} options={{ headerShown: false }} />
                    <Drawer.Screen name="Match Detail" component={MatchDetail} options={{ headerShown: false }} />
                    <Drawer.Screen name='Team Detail' component={TeamDetail} options={{ headerShown: false }} />
                </Drawer.Navigator>
            </NavigationContext.Provider>
        </NavigationContainer>);
};

export default AppMain;