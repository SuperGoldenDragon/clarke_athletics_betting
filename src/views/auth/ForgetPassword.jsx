import { FormEvent, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import auth, { firebase, passwordReset } from '@react-native-firebase/auth';
import mail from '../../assets/images/icons/mail.png';
function ForgetPassword() {
    const [email, setEmail] = useState('')
    const [emailMessage, setEmailMessage] = useState(false)
    const navigation = useNavigation();
    const handleSubmit = () => {
        try {
            console.log(email);
            auth()
                .sendPasswordResetEmail(email)
                .then(() => {
                    setEmailMessage(true);
                    console.log('password reset is sucessfully!');
                    navigation.navigate('Login');
                })

        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert('User not found, try again!')
                setEmail('')
            }
        }
    };

    return (
        <View style={[styles.container]}>
            {
                emailMessage ?
                    <Text style={[styles.text]}>The Email has been sent; Check your Inbox!</Text> :
                    (
                        <View style={{}}>
                            <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10 }}>
                                <Text style={[styles.text]}>Forget Password?</Text>
                            </View>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#B9B9B9' }}>
                                <View style={{ justifyContent: "center", paddingHorizontal: 10 }}>
                                    <Image source={mail} style={{}}></Image>
                                </View>
                                <View >
                                    <TextInput style={[styles.text, {}]}
                                        value={email}
                                        placeholder="name@email.com"
                                        onChangeText={e => setEmail(e)
                                        }
                                    />
                                </View>
                            </View>
                            <View style={[styles.buttonContainer, { flexDirection: "row", justifyContent: "center" }]}>
                                <TouchableOpacity onPress={() => handleSubmit()} style={{}}><Text style={[styles.text, { fontSize: 16, borderWidth: 1, borderColor: '#B9B9B9', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 10, color: 'white', backgroundColor: 'rgb(60, 179, 113)' }]}>Send the mail</Text></TouchableOpacity>
                            </View>
                        </View>)
            }
        </View>
    )
}

export default ForgetPassword
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 200
    },
    text: {
        color: '#333',
        fontSize: 24,
    },
    buttonContainer: {
        margin: 25
    }
})