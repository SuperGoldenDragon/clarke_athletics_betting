import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native"
import { useState, useCallback, useEffect } from "react";
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from 'react-native-select-dropdown';
import DropdownIcon from '../assets/images/icons/login-vector.png';
import auth from '@react-native-firebase/auth';
import { Alert } from "react-native";
import firestore, { collection, doc } from '@react-native-firebase/firestore';
import axios from "axios";
import moment from "moment";
const Newchannel = () => {
    const [channelName, setchannelName] = useState('');
    const [photo1, setPhoto1URI] = useState(null);
    const [photo2, setPhoto2URI] = useState(null);
    const [test, setTest] = useState([]);
    const [Teamname, SetTeamname] = useState([]);
    const [team, setTeam] = useState('');
    const [dateTime, setDateTime] = useState([]);
    const [date, setDate] = useState('');
    const navigation = useNavigation();
    useEffect(() => {
        fetchscheduleData();
        // fetchTime(team);
        // getImage(team);
    }, [team])
    const fetchscheduleData = async () => {
        let doc_data = [];
        let doc_array = [];
        let doc_Time = [];
        await firestore()
            .collection('API')
            .doc('SChedules')
            .get()
            .then(snapshot => {
                doc_data = snapshot.data().schedulearray;
                doc_data.forEach((row) => {
                    doc_array.push((row.AwayTeam) + '   VS   ' + (row.HomeTeam));
                    // doc_Time.push(row.DateTime);
                    // console.log(row.DateTime);
                })
            })
        SetTeamname(doc_array);
        // setDateTime(doc_Time);
    }
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
        if (photo1 === null || photo2 === null) {
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
                    channelName: team,
                    email: auth().currentUser.email,
                    count: 0,
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
                {/* <View style={{ borderBottomWidth: 1, borderColor: '#3C3C3C', paddingHorizontal: 10, }}>
                    <TextInput placeholder='Write New channelName' value={channelName} onChangeText={setchannelName} style={{ fontSize: 20 }} />
                </View> */}
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 5 }}>
                    <SelectDropdown
                        data={Teamname}
                        onSelect={(item) => {
                            setTeam(item);
                            // console.log(Teamname.index)
                        }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={[styles.matchTypeDropdownButtonStyle, { width: 200, height: 35, borderRadius: 3 }]}>
                                    <Text style={[styles.matchTypeDropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5, marginTop: 5 }]}>
                                        {selectedItem || 'ScheduleName'}

                                    </Text>
                                    <View style={{ marginTop: 10, padding: 4 }}>
                                        <Image source={DropdownIcon} style={{ width: 8, height: 6.7, }} />
                                    </View>
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ ...styles.scheduleDropdownItemStyle, ...(isSelected && { backgroundColor: '#000' }) }}>
                                    <Text style={styles.matchTypeDropdownItemTxtStyle}>{item}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.matchTypeDropdownMenuStyle}
                    />
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
    },
    matchTypeDropdownButtonStyle: {
        backgroundColor: 'grey',
        paddingHorizontal: 10,
        paddingVertical: 3,
        // borderRadius: 100,
        flexDirection: 'row',
    },
    matchTypeDropdownButtonTxtStyle: {
        fontSize: 16,
        fontWeight: '500',
        color: "white"
    },
    matchTypeDropdownButtonArrowStyle: {
        fontSize: 10,
    },
    matchTypeDropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    matchTypeDropdownMenuStyle: {
        backgroundColor: 'grey',
        borderRadius: 3,
    },
    matchTypeDropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    matchTypeDropdownItemTxtStyle: {
        flex: 1,
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
    },
    matchTypeDropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    scheduleDropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
})