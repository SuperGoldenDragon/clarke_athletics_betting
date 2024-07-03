import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import NavigationContext from '../../components/NavigationContext';
import { useNavigation } from '@react-navigation/native';
import CustomSidebar from './CustomSidebar';
import { DrawerProvider } from '../../components/DrawerContext';
import History from '../history/History';
import Profile from '../profile/Profile';
import BuzzerFeed from '../profile/BuzzerFeed';
import Wager from './wager/Wager';
import Subscribe from '../profile/Subscribe';
import TVSchedule from '../profile/TVSchedule';
import BattleDraft from '../profile/BattleDraft';
import DroppingOdds from '../profile/DroppingOdds';
import Settings from '../profile/Settings';
import WhatsNew from '../profile/WhatsNew';
import LeaguesMatch from './leagues/LeaguesMatch';
import HomeBlogs from './home/HomeBlogs';
import MatchDetail from './wager/MatchDetail';
import TeamDetail from '../teamdetail/TeamDetail';
import Newchannel from '../../components/Newchannel';
import Myprofile from '../profile/Myprofile';
import ChatBubble from '../../components/ChatBubble';
import League from '../main/leagues/Leagues';
const Drawer = createDrawerNavigator();

const AppMain = () => {
    const parentNavigation = useNavigation();

    const toParent = (route, params = {}) => {
        parentNavigation.navigate(route, params);
    };

    return (
        <DrawerProvider>
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
                        <Drawer.Screen name='New' component={WhatsNew} options={{ headerShown: false }} />
                        <Drawer.Screen name="Leagues" component={League} options={{ headerShown: false }} />
                        <Drawer.Screen name="Home Blogs" component={HomeBlogs} options={{ headerShown: false }} />
                        <Drawer.Screen name="Match Detail" component={MatchDetail} options={{ headerShown: false }} />
                        <Drawer.Screen name='Team Detail' component={TeamDetail} options={{ headerShown: false }} />
                        <Drawer.Screen name='Newchannel' component={Newchannel} options={{ headerShown: false }} />
                        <Drawer.Screen name='My profile' component={Myprofile} options={{ headerShown: false }} />
                        <Drawer.Screen name='UserProfile' component={Myprofile} options={{ headerShown: false }} />
                        <Drawer.Screen name='wager' component={Wager} options={{ headerShown: false }} />
                    </Drawer.Navigator>
                </NavigationContext.Provider>
            </NavigationContainer>
        </DrawerProvider>);
};

export default AppMain;