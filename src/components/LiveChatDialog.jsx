import React, { useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, ScrollView, TextInput, FlatList, ActivityIndicator, PermissionsAndroid } from 'react-native';
import CloseIcon from '../assets/images/icons/close-icon.png';
import FullscreenIcon from '../assets/images/icons/fullscreen-icon.png';
import SelectDropdown from 'react-native-select-dropdown';
import DropDownIcon from '../assets/images/icons/drop-down-icon.png';
import TeamLogo1 from '../assets/images/logos/team-logo-1.png';
import CameraIcon from '../assets/images/icons/camera-icon.png';
import AttachmentIcon from '../assets/images/icons/attachment-icon.png';
import { launchImageLibrary, launchCamera, ImagePickerResponse, ImagePicker } from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ChatBubble from './ChatBubble';
import { useState } from 'react';
import { Alert } from 'react-native';
import SendButton from './SendButton';
import Input from './Input';
const emojisWithIcons = [];

const LiveChatDialog = (props) => {
    const { open, onClose } = props;
    const [chats, setChats] = useState([]);
    const [text, setText] = useState('');
    const [User_name, setName] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        if (open) {
            const unsubscribe = firestore()
                .collection('chats')
                .orderBy('createdAt', 'asc')    // Sort by timestamp
                .limitToLast(15)
                // Only retrieve the last 15 messages
                .onSnapshot(querySnapshot => {
                    const chatsArr = [];
                    querySnapshot.forEach(doc => {
                        const id = doc.id;
                        const data = doc.data();
                        // Add docId and chat data to chats array 
                        chatsArr.push({ id, ...data });

                    });
                    setChats(chatsArr);
                    setLoading(false);
                });

            return () => {
                unsubscribe();
                setLoading(false);
            };
        }
    }, [open]);
    if (loading) {
        return <ActivityIndicator />;  // Show loader while loading chats
    } else {
        const username = auth().currentUser.displayName;
    }
    //select the image on the gallery
    const galleryPickerImage = () => {
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
                setSelectedImage(imageUri);
            }
        });
    }

    //select the camera
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission granted");
                opencamera(); // Call openCamera if permission is granted
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };
    const opencamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                Alert.alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                console.log("source:::" + source);
            }
        });

    }
    const sendMessage = async e => {
        const { uid, photoURL } = auth().currentUser;
        const playname = auth().currentUser.displayName;
        const Email = auth().currentUser.email;
        console.log("Email::::" + Email);
        if (auth().currentUser.displayName == null) {

            firestore().collection('Users').where('email', '==', Email).get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const doc_data = doc.data().userName;
                        console.log("data+" + doc_data);
                        setName(doc_data);
                    });
                })

        } else {
            console.log("Playname+++:" + playname);
        }

        // Dont allow empty/large messages
        if (text.length > 1 && text.length < 40) {
            try {
                e.preventDefault();
                setLoading(true);

                firestore()
                    .collection('chats')
                    .doc()
                    .set({
                        owner: uid,
                        imageUrl: photoURL ? photoURL : selectedImage,
                        text: text,
                        Username: playname ? playname : User_name,
                        createdAt: Date.now(),
                    })
                    .then(() => {
                        setText('');
                        setLoading(false);
                    })
                    .catch(err => {
                        setLoading(false);
                        Alert.alert('Error', err);
                    });
            } catch (err) {
                setLoading(false);
                Alert.alert('Error', err);
            }
        } else {
            setLoading(false);
            Alert.alert('Chat not sent', 'Must be between 1 and 40 characters');
        }
    };

    return (<View style={[styles.container, { display: open ? "flex" : "none" }]}>
        <View style={styles.mask_bg}></View>
        <View style={styles.dialog}>
            <View style={styles.dialogContent}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                    <View style={{ flexGrow: 1, flexDirection: "row" }}>
                        <View>
                            <SelectDropdown
                                data={emojisWithIcons}
                                onSelect={(item) => { }}
                                renderButton={(selectedItem, isOpened) => {
                                    return (
                                        <View style={[styles.dropdownButtonStyle]}>
                                            <Text style={[styles.dropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5 }]}>
                                                {(selectedItem && selectedItem.title) || 'NBA'}
                                            </Text>
                                            <View style={{ padding: 4 }}>
                                                <Image source={DropDownIcon} style={{ width: 8, height: 6.7 }} />
                                            </View>
                                        </View>
                                    );
                                }}
                                renderItem={(item, index, isSelected) => {
                                    return (
                                        <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#000' }) }}>
                                            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                                        </View>
                                    );
                                }}
                                showsVerticalScrollIndicator={false}
                                dropdownStyle={styles.dropdownMenuStyle}
                            />
                        </View>

                    </View>
                    {/* <View style={{ flexGrow: 1 }}>
                        <Text style={{ color: "#22252A", fontWeight: "500", textAlign: "center" }}>Washington Wizards</Text>
                    </View>
                    <View style={{ flexGrow: 1, flexDirection: "row", justifyContent: "flex-end", paddingVertical: 4 }}>
                        <TouchableOpacity>
                            <Image source={FullscreenIcon} />
                        </TouchableOpacity>
                    </View> */}
                </View>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View >
                        <ScrollView style={{}}>
                            <View style={{ flexDirection: "row", justifyContent: "center", paddingHorizontal: 10, paddingVertical: 7 }}>
                                <TouchableOpacity onPress={() => { console.log("channel1") }}>
                                    <Image source={TeamLogo1} style={styles.teamLogo} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <TouchableOpacity onPress={() => { console.log("channel2") }}>
                                    <Image source={TeamLogo1} style={styles.teamLogo} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ flexGrow: 1, flex: 1 }}>
                        <View style={{ flex: 1, borderBottomColor: "#EEFAF8", borderBottomWidth: 1, marginBottom: 10 }}>
                            <View style={[styles.chatStyle, {}]}>
                                {chats && (
                                    <FlatList
                                        data={chats}
                                        renderItem={({ item }) => <ChatBubble key={item.id} chat={item} />}
                                    />
                                )}
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={{ paddingVertical: 7, paddingHorizontal: 5 }} onPress={() => { galleryPickerImage(); }}>
                                <Image source={AttachmentIcon} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", flexGrow: 1, backgroundColor: "#F3F6F6", borderRadius: 6, paddingHorizontal: 6 }}>
                                <TextInput
                                    value={text} onChangeText={setText}
                                    style={{ paddingVertical: 0, fontSize: 10, flexGrow: 1, width: "60%" }}
                                    placeholder='Write your message'
                                    multiline={true}
                                />
                                <SendButton handleChat={sendMessage} />
                            </View>
                            <TouchableOpacity style={{ paddingVertical: 7, paddingHorizontal: 5 }} onPress={() => { requestCameraPermission(); }}>
                                <Image source={CameraIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={onClose} style={styles.close}>
                    <Image source={CloseIcon} style={{ width: 14, height: 14 }} />
                </TouchableOpacity>
            </View>
        </View>

    </View>);

};


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 999,
        flexDirection: "row",
        justifyContent: "center",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    mask_bg: {
        position: "absolute",
        zIndex: -1,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#555",
        opacity: 0.5
    },
    dialog: {
        top: "45%",
        width: "70%",
        height: "100%"
    },
    dialogContent: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 12,
        shadowColor: '#000', // Shadow color
        shadowOffset: {
            width: 0, // No horizontal offset
            height: 3, // 2 units of vertical offset
        },
        shadowOpacity: 0.25, // Opacity of the shadow
        shadowRadius: 6, // Radius of the shadow blur
        elevation: 5, // Android shadow elevation (ignored on iOS)
        marginBottom: 10,
        maxHeight: "50%",
        flex: 1
    },
    close: {
        backgroundColor: "#1B1B1B",
        padding: 12,
        borderRadius: 24,
        shadowOffset: {
            width: 0, // No horizontal offset
            height: 3, // 2 units of vertical offset
        },
        shadowOpacity: 0.25, // Opacity of the shadow
        shadowRadius: 6, // Radius of the shadow blur
        elevation: 5, // Android shadow elevation (ignored on iOS)
    },



    dropdownButtonStyle: {
        backgroundColor: '#26272B',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 100,
        flexDirection: 'row',
    },
    dropdownButtonTxtStyle: {
        fontSize: 10,
        fontWeight: '500',
        color: "white"
    },
    dropdownButtonArrowStyle: {
        fontSize: 10,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: '#26272B',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 10,
        fontWeight: '500',
        color: 'white',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },

    teamLogo: {
        width: 50,
        height: 50
    }
});

export default LiveChatDialog;