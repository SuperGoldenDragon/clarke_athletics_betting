import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native"
import { useState, useCallback } from "react";
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import { Alert } from "react-native";
import firestore from '@react-native-firebase/firestore';
import axios from "axios";
import moment from "moment";
const Newchannel = () => {
    const [channelName, setchannelName] = useState('');
    const [photo1, setPhoto1URI] = useState(null);
    const [photo2, setPhoto2URI] = useState(null);
    const [test, setTest] = useState([]);
    const [Teamname, SetTeamname] = useState([]);
    const navigation = useNavigation();
    const pickerphotoA = useCallback(() => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                console.log(response);
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setPhoto1URI(imageUri);
            }
        });
    }, [setPhoto1URI]);

    const pickerphotoB = useCallback(() => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                console.log(response);
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setPhoto2URI(imageUri);
                // console.log(imageUri);
            }
        });
    }, [setPhoto2URI]);
    //create new channel
    const ChannelAccept = () => {
        if (channelName === '') {
            Alert.alert("enter the channelName!");
        }
        else if (photo1 === null || photo2 === null) {
            Alert.alert("select the image!");
        }
        else {
            console.log("error!")
            firestore()
                .collection('Newpost')
                .doc()
                .set({
                    owner: auth().currentUser.uid,
                    image_A_Uri: photo1 ? photo1 : "",
                    image_B_Uri: photo2 ? photo2 : "",
                    channelName: channelName,
                    email: auth().currentUser.email,
                    createdAt: Date.now()
                })
                .then(
                    () => {
                        setPhoto1URI(null);
                        setPhoto2URI(null);
                        setchannelName('');
                        console.log("successfully!");
                        Alert.alert('Notification', "Create New channel", [{ text: 'OK', onPress: () => navigation.goBack() }]);

                    }
                )
        }
    }
    //reset new channel
    const channelReset = () => {
        setPhoto1URI(null);
        setPhoto2URI(null);
        setchannelName('');
    }
    //cancel new channel
    const channelCancel = () => {
        navigation.goBack();
    }

    return (
        <View style={[styles.container]}>
            <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                <Text style={[styles.text, { paddingVertical: 20 }]}>New channel</Text>
            </View>
            <View style={{ flexDirection: "row", paddingHorizontal: 30 }}>
                <View style={{ justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, color: 'black', paddingHorizontal: 10 }}>ChannelName:</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: '#3C3C3C', paddingHorizontal: 10, }}>
                    <TextInput placeholder='Write New channelName' value={channelName} onChangeText={setchannelName} style={{ fontSize: 20 }} />
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                <View >
                    <Text style={[styles.imagetext, photo1 ? styles.PickerOnPadding : styles.PickerOnPadding, {}]}>ImageA</Text>
                    <View>
                        {photo1 ? (<Image
                            source={{ uri: photo1 ? photo1 : "" }}
                            style={{ width: 100, height: 100, borderWidth: 5, borderColor: '#F8C067', borderRadius: 10 }}
                        />
                        ) : null}
                    </View>
                    {photo1 ? null : (
                        <View style={[photo1 ? { marginVertical: 10 } : null]}>
                            <TouchableOpacity onPress={() => pickerphotoA()} style={{ borderRadius: 20, paddingHorizontal: 10, backgroundColor: '#F7D068' }}>
                                <Text style={[styles.imagetext, photo1 ? styles.PickerOnPadding : styles.PickerOnPadding,]}>Picker Image</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                </View>
                <View >
                    <Text style={[styles.imagetext, photo2 ? styles.PickerOnPadding : styles.PickerOnPadding, {}]}>ImageB</Text>
                    <View>
                        {photo2 ? (
                            <Image
                                source={{ uri: photo2 ? photo2 : "" }}
                                style={{ width: 100, height: 100, borderWidth: 5, borderColor: '#F8C067', borderRadius: 10 }}
                            />
                        ) : null}
                    </View>
                    {photo2 ? null : (
                        <View style={[photo2 ? { marginVertical: 10 } : null]}>
                            <TouchableOpacity style={{ borderRadius: 20, paddingHorizontal: 10, backgroundColor: '#F7D068' }}
                                onPress={() => pickerphotoB()}>
                                <Text style={[styles.imagetext, photo1 ? styles.PickerOnPadding : styles.PickerOnPadding,]}>Picker Image</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 30 }}>
                <TouchableOpacity onPress={() => ChannelAccept()} style={{ borderRadius: 20, paddingHorizontal: 10, backgroundColor: '#F7D068' }}>
                    <Text style={[styles.imagetext, photo1 ? styles.PickerOnPadding : styles.PickerOnPadding,]}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => channelReset()} style={{ borderRadius: 20, paddingHorizontal: 10, backgroundColor: '#F7D068' }}>
                    <Text style={[styles.imagetext, photo1 ? styles.PickerOnPadding : styles.PickerOnPadding,]}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { channelCancel() }} style={{ borderRadius: 20, paddingHorizontal: 10, backgroundColor: '#F7D068' }}>
                    <Text style={[styles.imagetext, photo1 ? styles.PickerOnPadding : styles.PickerOnPadding,]}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}
export default Newchannel;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 150
    },
    text: {
        color: 'black',
        fontSize: 30
    },
    PickerOnPadding: {
        paddingVertical: 10
    },
    PickerOffPadding: {
        paddingVertical: 5
    },
    imagetext: {
        fontSize: 15,
        textAlign: "center",
        color: '#3C3C3C'
    }
})