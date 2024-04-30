import { View, Text, TouchableOpacity, StyleSheet, Image, Switch, Modal, Alert } from "react-native";
import { useState } from "react";
import GlobalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import PageBackIcon from '../../assets/images/icons/history-icon-3.png';
const Settings = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);

    };
    const [alertVisible, setAlertVisible] = useState(false);

    const showAlert = () => {
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={[
                GlobalStyles.defaultPagePadding, GlobalStyles.defaultAppbarPadding, GlobalStyles.appbar, { flexDirection: "row" }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ paddingVertical: 12.5, marginRight: 15 }}>
                        <Image source={PageBackIcon} />
                    </View>
                </TouchableOpacity>
                <View style={{ display: "flex", alignSelf: "center" }}>
                    <Text style={{ color: "white", fontSize: 18, marginRight: "auto", fontWeight: "600", paddingVertical: 2 }}>Settings</Text>
                </View>
            </View>
            <View style={{}}>
                <View style={{ justifyContent: "flex-start", paddingVertical: 20, borderBottomWidth: 1, borderColor: '#B9B9B9', marginHorizontal: 30 }}>
                    <View style={{ marginVertical: 25 }}>
                        <Text style={[styles.text, { textTransform: "uppercase" }]} >
                            Application
                        </Text>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <TouchableOpacity>
                            <Text style={[styles.text, { fontWeight: "700", fontSize: 14 }]}>Odds Provider</Text>
                        </TouchableOpacity>
                        <Text style={[styles.text, { fontWeight: "400", fontSize: 14, color: '#B9B9B9' }]}>Choose your proffered odds format</Text>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <TouchableOpacity>
                            <Text style={[styles.text, { fontWeight: "700", fontSize: 14 }]}>First Day of The Week</Text>
                        </TouchableOpacity>
                        <Text style={[styles.text, { fontWeight: "400", fontSize: 14, color: '#B9B9B9' }]}>Choose your proffered odds format</Text>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <TouchableOpacity>
                            <Text style={[styles.text, { fontWeight: "700", fontSize: 14 }]}>Language</Text>
                        </TouchableOpacity>
                        <Text style={[styles.text, { fontWeight: "400", fontSize: 14, color: '#B9B9B9' }]}>Choose your proffered odds format</Text>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <TouchableOpacity>
                            <Text style={[styles.text, { fontWeight: "700", fontSize: 14 }]}>Currency</Text>
                        </TouchableOpacity>
                        <Text style={[styles.text, { fontWeight: "400", fontSize: 14, color: '#B9B9B9' }]}>Choose your proffered odds format</Text>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <TouchableOpacity>
                            <Text style={[styles.text, { fontWeight: "700", fontSize: 14 }]}>Measurement Units</Text>
                        </TouchableOpacity>
                        <Text style={[styles.text, { fontWeight: "400", fontSize: 14, color: '#B9B9B9' }]}>Choose your proffered odds format</Text>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <TouchableOpacity>
                            <Text style={[styles.text, { fontWeight: "700", fontSize: 14 }]}>Privacy Settings</Text>
                        </TouchableOpacity>
                        <Text style={[styles.text, { fontWeight: "400", fontSize: 14, color: '#B9B9B9' }]}>Choose your proffered odds format</Text>
                    </View>
                </View>
                <View style={{ flexGrow: 1, flexDirection: "column", justifyContent: "flex-start", marginTop: 20, marginHorizontal: 30 }}>
                    <View style={{ marginBottom: 15 }} >
                        <Text style={[styles.text]}>Favorite Notifications</Text>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <TouchableOpacity onPress={() => { toggleModal() }}>
                            <Text style={[styles.text, { fontWeight: "700", fontSize: 14 }]}>Notification Settings</Text>
                        </TouchableOpacity >
                        <Text style={[styles.text, { fontWeight: "400", fontSize: 14, color: '#B9B9B9' }]}>Choose your proffered odds format</Text>
                    </View>
                    <View style={{ marginBottom: 15, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={[styles.text, { fontWeight: "700", fontSize: 14 }]}>Text To Speech</Text>
                        <View>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>
        </View>
    )
}
const BottomModal = ({ visible, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Your bottom modal content here</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
export default Settings;
const styles = StyleSheet.create({
    text: {
        fontWeight: "600",
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#22252A',
    }
})