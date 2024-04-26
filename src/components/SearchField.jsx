import { StyleSheet, View, TextInput, Image } from "react-native";
import SearchDarkIcon from '../assets/images/icons/search-dark-icon.png';

const SearchField = (props: any) => {
    return (<View style={styles.container}>
        <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder="Search" placeholderTextColor={"#3B3B3B"} />
        <View style={{ padding: 7 }}>
            <Image source={SearchDarkIcon} style={styles.icon} />
        </View>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#B9B9B9",
        padding: 3,
        flexDirection: "row"
    },
    input: {
        backgroundColor: 'transparent', // Set background color to transparent
        borderWidth: 0, // Set border width to 0 to remove the border
        borderRadius: 8, // Optional: Add border radius for rounded corners
        paddingHorizontal: 10, // Optional: Add padding for text input
        fontSize: 13,
        color: '#000', // Text color
        paddingVertical: 3,
        flexGrow: 1
    },
    icon: {
        width: 20,
        height: 20
    }
});

export default SearchField;