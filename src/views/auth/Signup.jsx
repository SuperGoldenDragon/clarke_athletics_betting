import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import { useState } from 'react';
import DropdownIcon from '../../assets/images/icons/login-vector.png';
import loginlogo3 from '../../assets/images/logos/login-logo-3.png';
import loginlogo5 from '../../assets/images/logos/login-logo-5.png';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [ischecked, setIschecked] = useState(false);
    return (
        <LinearGradient colors={['#22252A', '#3C3C3C', '#1B1B1B']}
            style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'center', top: '-10%' }}>
                    <Image style={{ opacity: 0.43 }} source={loginlogo3} />
                </View>
                <View style={{ alignItems: 'center', color: 'white' }}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <TextInput style={[styles.text, { backgroundColor: 'grey', width: 295, fontSize: 16, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white' }]} value={email} placeholder='Username' placeholderTextColor={'white'} onChange={(e) => setEmail(e.target.value)} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <TextInput style={[styles.text, { backgroundColor: 'grey', width: 295, fontSize: 16, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white' }]} value={email} placeholder='First Name' placeholderTextColor={'white'} onChange={(e) => setEmail(e.target.value)} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <TextInput style={[styles.text, { backgroundColor: 'grey', width: 295, fontSize: 16, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white' }]} value={email} placeholder='Last Name' placeholderTextColor={'white'} onChange={(e) => setEmail(e.target.value)} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <TextInput style={[styles.text, { backgroundColor: 'grey', width: 295, fontSize: 16, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white' }]} value={email} placeholder='Email' placeholderTextColor={'white'} onChange={(e) => setEmail(e.target.value)} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <SelectDropdown
                            data={[]}
                            onSelect={(item) => { }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <View style={[styles.matchTypeDropdownButtonStyle, { width: 295, height: 40, borderRadius: 3 }]}>
                                        <Text style={[styles.matchTypeDropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5, marginTop: 5 }]}>
                                            {selectedItem || 'Favorite team'}
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
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 5 }}>
                        <SelectDropdown
                            data={[]}
                            onSelect={(item) => { }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <View style={[styles.matchTypeDropdownButtonStyle, { width: 295, height: 40, borderRadius: 3 }]}>
                                        <Text style={[styles.matchTypeDropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5, marginTop: 5 }]}>
                                            {selectedItem || 'Select Sports Jersey'}
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
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <SelectDropdown
                            data={[]}
                            onSelect={(item) => { }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <View style={[styles.matchTypeDropdownButtonStyle, { width: 295, height: 40, borderRadius: 3 }]}>
                                        <Text style={[styles.matchTypeDropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5, marginTop: 5 }]}>
                                            {selectedItem || 'Country'}
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
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <TextInput style={[styles.text, { backgroundColor: 'grey', width: 295, fontSize: 16, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white' }]} value={email} placeholder='Password' placeholderTextColor={'white'} onChange={(e) => setEmail(e.target.value)} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <TextInput style={[styles.text, { backgroundColor: 'grey', width: 295, fontSize: 16, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white' }]} value={email} placeholder='Confirm Password' placeholderTextColor={'white'} onChange={(e) => setEmail(e.target.value)} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        <TouchableOpacity style={{ width: 295, fontSize: 19, backgroundColor: '#F7D068', borderRadius: 5, paddingVertical: 10 }}><Text style={[styles.text, { fontWeight: '500', textAlign: 'center', fontSize: 18, color: '#22252A' }]}>Sing Up</Text></TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center', paddingTop: 1 }}>
                            <CheckBox value={ischecked} onValueChange={() => { setIschecked(!ischecked) }} />
                        </View>
                        <View style={{ paddingTop: 12 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.text, { color: '#F3F6F6', fontSize: 14, fontWeight: '400' }]}>I agree with </Text><Text style={[styles.text, { color: '#F3F6F6', fontSize: 14, textDecorationLine: 'underline', fontWeight: '500' }]}>Privacy</Text><Text style={[styles.text, { color: '#F3F6F6', fontSize: 14, fontWeight: '400' }]}> and</Text><Text style={[styles.text, { color: '#F3F6F6', fontSize: 14, textDecorationLine: 'underline', fontWeight: '500' }]}> conditions of </Text>
                            </View>
                            <Text style={[styles.text, { color: '#F3F6F6', fontSize: 14, textDecorationLine: 'underline', fontWeight: '500' }]}>Service</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10 }} >
                        <Image source={loginlogo5} ></Image>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', top: '-20%' }} >
                        <Image source={loginlogo5} ></Image>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient >
    );
};

export default Signup;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 24
    },
    defaultPadding: {
        paddingHorizontal: 21
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
        fontSize: 10,
        fontWeight: '500',
        color: 'white',
    },
    matchTypeDropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },

    scheduleDropdownButtonStyle: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 4,
        flexDirection: 'row',
        borderColor: "#EDEDED",
        borderWidth: 1
    },
    scheduleDropdownButtonTxtStyle: {
        fontSize: 13,
        fontWeight: '500',
        color: "#3C3C3C"
    },
    scheduleDropdownButtonArrowStyle: {
        fontSize: 10,
    },
    scheduleDropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    scheduleDropdownMenuStyle: {
        backgroundColor: '#eee',
        borderRadius: 8,
    },
    scheduleDropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    scheduleDropdownItemTxtStyle: {
        flex: 1,
        fontSize: 10,
        fontWeight: '500',
        color: '#3C3C3C',
    },
    scheduleDropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },

})