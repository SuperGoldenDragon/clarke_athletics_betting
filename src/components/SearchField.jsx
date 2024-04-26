import { StyleSheet, View, TextInput, Image } from "react-native";
import SearchDarkIcon from '../assets/images/icons/search-dark-icon.png';

const SearchField = (props) => {
    return (<View style={styles.container}>
        <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder="Search" placeholderTextColor={"#3B3B3B"} />
        <View style={{ paddingVertical: 10 }}>
            <Image source={SearchDarkIcon} />
        </View>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#B9B9B9",
        padding: 3,
        flexDirection: "row",
        paddingHorizontal: 10
    },
    input: {
        backgroundColor: 'transparent', // Set background color to transparent
        borderWidth: 0, // Set border width to 0 to remove the border
        borderRadius: 8, // Optional: Add border radius for rounded corners
        fontSize: 12,
        color: '#000', // Text color
        paddingVertical: 3,
        flexGrow: 1
    }
});

export default SearchField;