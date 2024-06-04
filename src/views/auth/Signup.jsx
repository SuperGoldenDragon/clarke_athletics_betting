import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView, ActivityIndicator, TurboModuleRegistry } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import { useState } from 'react';
import DropdownIcon from '../../assets/images/icons/login-vector.png';
import loginlogo3 from '../../assets/images/logos/login-logo-3.png';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL, API_KEY, COUNTRY_API_KEY, COUNTRY_BASE_URL } from '../../components/api';
import axios from 'axios';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [EmailVerify, setEmailVerify] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [userName, setUserName] = useState('');
    const [usernameVerify, setUsernameVerify] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [userfirstnameVerify, setUserfirstnameVerify] = useState(false)
    const [lastName, setLastName] = useState('');
    const [userlastnameVerify, setUserlastnameVerify] = useState(false)
    const [ischecked, setIschecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [confirmpassword, setConfirmpassword] = useState('');
    const [Teamname, setTeamname] = useState([]);
    const [Countryname, setCountryname] = useState([]);
    const Teamlist = [];
    const countrylist = [];
    const navigation = useNavigation();
    const handleSignUp = () => {
        setLoading(true)
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');

                firestore()
                    .collection('Users')
                    .add({
                        userName: userName,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                    })
                    .then(() => {
                        console.log('User added!');
                        navigation.navigate('Main')
                    })
                    .catch((e) => console.log(e));
                setLoading(false)
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
                setLoading(false)
            });
    }
    function handleUserFirstName(e) {
        const firstNamevar = e;
        setFirstName(firstNamevar);
        setUserfirstnameVerify(false);
        if (firstNamevar.length > 1) {
            setUserfirstnameVerify(true);
        }
    }
    function handleUserLastName(e) {
        const LastNamevar = e;
        setLastName(LastNamevar);
        setUserlastnameVerify(false);
        if (LastNamevar.length > 1) {
            setUserlastnameVerify(true);
        }
    }
    function handleEmail(e) {
        const Emailvar = e;
        setEmail(Emailvar);
        setEmailVerify(false);
        if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(Emailvar)) {
            setEmail(Emailvar);
            setEmailVerify(true);
        }

    }
    function handlePassword(e) {
        const passwordVar = e;
        setPassword(passwordVar);
        setPasswordVerify(false);
        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
            setPassword(passwordVar);
            setPasswordVerify(true);
        }
    }
    function handleconfirmPassword(e) {
        const confirmpasswordVar = e;
        if (confirmpasswordVar == password) {
            setConfirmpassword(confirmpasswordVar);
            // console.log("success!");
        }
    }
    function handleUsername(e) {
        const uservar = e;
        setUserName(uservar);
        setUsernameVerify(false);
        if (uservar.length > 1) {
            setUsernameVerify(true);
        }
    }
    useEffect(() => {
        axios.get(BASE_URL + '/PlayersByAvailable', {
            headers: {
                'Ocp-Apim-Subscription-Key': API_KEY
            },
        }).then((response) => {
            response.data.forEach((row) => {
                // console.log(row);
                if (row.Team === null) {
                    return;
                }
                Teamlist.push(row.Team);
            })
            const TeamNameArray = [...new Set(Teamlist)];
            setTeamname(TeamNameArray);
        }
        ).catch(err => {
            console.log(err);
        });
        axios.get(COUNTRY_BASE_URL, {
            headers: { 'Authorization': 'Bearer y8W0jyplcKUWb94eW74Hb38i8T9ZfkBaaUgnhkS4' }
        }).then((response) => {
            Object.keys(response.data).forEach(key => {
                countrylist.push(response.data[key].name);
            })
            setCountryname(countrylist);
        })
    }, [])
    return (
        <LinearGradient colors={['#22252A', '#3C3C3C', '#1B1B1B']}
            style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', top: '-10%' }}>
                    <Image style={{ opacity: 0.43 }} source={loginlogo3} />
                </View>
                <View style={{ alignItems: 'center', color: 'white' }}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <TextInput style={[styles.text, styles.inputText]} placeholder='Username' placeholderTextColor={'white'} onChangeText={e => handleUsername(e)} />
                    </View>
                    {userName.length < 1 ? null : usernameVerify ? null : (
                        <Text
                            style={{
                                marginLeft: 73.5,
                                color: 'white',
                            }}>
                            UserName should be to equal with FirstName and LastName
                        </Text>
                    )}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <TextInput style={[styles.text, styles.inputText]} placeholder='First Name' placeholderTextColor={'white'} onChangeText={e => handleUserFirstName(e)} />
                    </View>
                    {firstName.length < 1 ? null : userfirstnameVerify ? null : (
                        <Text style={{ marginLeft: 10, color: 'white' }}>
                            FirstName should be more than 1 character
                        </Text>
                    )}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <TextInput style={[styles.text, styles.inputText]} placeholder='Last Name' placeholderTextColor={'white'} onChangeText={e => handleUserLastName(e)} />
                    </View>
                    {lastName.length < 1 ? null : userlastnameVerify ? null : (
                        <Text style={{ marginLeft: 10, color: 'white' }}>
                            LastName should be more than 1 character
                        </Text>
                    )}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <TextInput style={[styles.text, styles.inputText]}
                            placeholder='Email' placeholderTextColor={'white'} onChangeText={e => handleEmail(e)} />
                    </View>
                    {email.length < 1 ? null : EmailVerify ? null : (
                        <Text
                            style={{
                                marginLeft: 20,
                                color: 'white',
                            }}>
                            Please Enter proper Email address
                        </Text>
                    )}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <SelectDropdown
                            data={Teamname}
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
                            data={Countryname}
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
                        <TextInput style={[styles.text, styles.inputText]} placeholder='Password' placeholderTextColor={'white'} secureTextEntry={true} onChangeText={e => handlePassword(e)} />
                    </View>
                    {password.length < 1 ? null : passwordVerify ? null : (
                        <Text
                            style={{
                                marginLeft: 10,
                                color: 'white',
                            }}>
                            Uppercase,Lowercase,Number and 6 or more characters
                        </Text>
                    )}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                        <TextInput style={[styles.text, styles.inputText]} placeholder='Confirm Password' placeholderTextColor={'white'} onChangeText={e => handleconfirmPassword(e)} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => { handleSignUp() }} style={{ width: 295, fontSize: 19, backgroundColor: '#F7D068', borderRadius: 5, paddingVertical: 10 }}>
                            <Text style={[styles.text, { fontWeight: '500', textAlign: 'center', fontSize: 18, color: '#22252A' }]}>Sing Up</Text>
                            {loading && <ActivityIndicator style={{ paddingHorizontal: 20 }} size="small" color="#22252A" />}</TouchableOpacity>
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
        fontSize: 15,
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
    inputText: {
        backgroundColor: 'grey', width: 295, fontSize: 16, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white'
    }
})