import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            toLoginSelect();
        }, 3000);
    }, []);

    const toLoginSelect = () => {
        navigation.navigate("Select Login");
    };

    return (
        <View>
            <Text>Splash</Text>
        </View>
    );
};

export default Splash;