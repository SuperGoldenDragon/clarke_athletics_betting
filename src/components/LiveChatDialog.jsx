import React, { useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, ScrollView, TextInput } from 'react-native';
import CloseIcon from '../assets/images/icons/close-icon.png';
import FullscreenIcon from '../assets/images/icons/fullscreen-icon.png';
import SelectDropdown from 'react-native-select-dropdown';
import DropDownIcon from '../assets/images/icons/drop-down-icon.png';
import TeamLogo1 from '../assets/images/logos/team-logo-1.png';
import CameraIcon from '../assets/images/icons/camera-icon.png';
import AttachmentIcon from '../assets/images/icons/attachment-icon.png';
import CopyIcon from '../assets/images/icons/copy-icon.png';
import DefaultAvatar from '../assets/images/avatars/avatar-1.png';
import ChatBubble from './ChatBubble';

const emojisWithIcons = [];

const LiveChatDialog = (props) => {
    const { open, onClose } = props;

    useEffect(() => {
        if (open) {
            console.log("opened");
        }
    }, [open]);

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
                    <View style={{ flexGrow: 1 }}>
                        <Text style={{ color: "#22252A", fontWeight: "500", textAlign: "center" }}>Washington Wizards</Text>
                    </View>
                    <View style={{ flexGrow: 1, flexDirection: "row", justifyContent: "flex-end", paddingVertical: 4 }}>
                        <TouchableOpacity>
                            <Image source={FullscreenIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View >
                        <ScrollView>
                            <View style={{ flexDirection: "row", justifyContent: "center", paddingHorizontal: 10, paddingVertical: 7 }}>
                                <Image source={TeamLogo1} style={styles.teamLogo} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Image source={TeamLogo1} style={styles.teamLogo} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Image source={TeamLogo1} style={styles.teamLogo} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Image source={TeamLogo1} style={styles.teamLogo} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Image source={TeamLogo1} style={styles.teamLogo} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Image source={TeamLogo1} style={styles.teamLogo} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Image source={TeamLogo1} style={styles.teamLogo} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Image source={TeamLogo1} style={styles.teamLogo} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Image source={TeamLogo1} style={styles.teamLogo} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Image source={TeamLogo1} style={styles.teamLogo} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ flexGrow: 1, flex: 1 }}>
                        <View style={{ flex: 1, borderBottomColor: "#EEFAF8", borderBottomWidth: 1, marginBottom: 10 }}>
                            <ScrollView>
                                <ChatBubble avatar={DefaultAvatar} name={"Hafizur Rahman"} content="Have a great working week!!" time="09:25 AM" />
                                <ChatBubble avatar={DefaultAvatar} name={"Majharul Haque"} content="This is my new 3d design" time="09:25 AM" />
                                <ChatBubble avatar={DefaultAvatar} name={"Annei Ellison"} content="This is my new 3d design" time="09:25 AM" />
                                <ChatBubble avatar={DefaultAvatar} content="You did your job well!" time="09:25 AM" you={true} />
                            </ScrollView>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={{ paddingVertical: 7, paddingHorizontal: 5 }}>
                                <Image source={AttachmentIcon} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", flexGrow: 1, backgroundColor: "#F3F6F6", borderRadius: 6, paddingHorizontal: 6 }}>
                                <TextInput
                                    style={{ paddingVertical: 0, fontSize: 10, flexGrow: 1, width: "60%" }}
                                    placeholder='Write your message'
                                    multiline={true}
                                />
                                <TouchableOpacity style={{ paddingVertical: 7 }}>
                                    <Image source={CopyIcon} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ paddingVertical: 7, paddingHorizontal: 5 }}>
                                <Image source={CameraIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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