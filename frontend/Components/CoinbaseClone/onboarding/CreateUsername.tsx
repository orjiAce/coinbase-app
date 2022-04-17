import React, {useState, createRef, useRef, useEffect, useLayoutEffect, useCallback} from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    KeyboardAvoidingView,
    SafeAreaView,
    Image, Platform, ActivityIndicator
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {
    useMoralis,
} from "react-moralis";
import Colors from '../../../constants/Colors'
const KEYBOARD_VERTICAL_OFFSET = 60 + StatusBar.currentHeight;

import Web3 from "web3";
import {fontPixel, heightPixel} from "../../../utils/normalize";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const CreateUsername = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={{
                    marginLeft: 10,
                }} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#111"/>
                </TouchableOpacity>

            ),
        });
    }, [navigation]);
    const {Moralis} = useMoralis();

    const recoveryPhraseText = [
        'Look', 'Remain', 'Seem', 'Smell', 'Sound', 'Stay', 'Taste', 'Was', 'Were', 'Answer', 'Enter', 'Jump'
    ];

    const web3Js = new Web3();
    const newUser = new Moralis.User();
    const [username, setUsername] = useState("");
    const [alreadyTaken, setAlreadyTaken] = useState(false);
    const [loadingCheck, setLoadingCheck] = useState(false);

    /*    useEffect(() => {
            setAlreadyTaken(false)
            setAlreadyTaken(false)
        }, [username])*/

    /* const checkUsername = useCallback(
         async () => {
             setLoadingCheck(true)
             const params = {userName: username};
             const user = await Moralis.Cloud.run("checkUser", params);
             const userObj = user.filter(item => item.attributes.username === username)
 console.log(!userObj[0].attributes.username)
             if (!userObj[0].attributes.username) {
                 setAlreadyTaken(false)
                 setLoadingCheck(false)
             } else {
                 setAlreadyTaken(true)
                 setLoadingCheck(false)
             }


         },
         [],
     );*/


    useEffect(() => {
        (async () => {
                setLoadingCheck(true)
                const params = {userName: username};
                const user = await Moralis.Cloud.run("checkUser", params);


                const userObj = await user.filter(item => item.attributes.username === username)
                console.log(userObj)


                if (userObj.length < 1) {
                    setAlreadyTaken(false)
                    setLoadingCheck(false)
                } else if (userObj[0].attributes.username) {

                    setAlreadyTaken(true)
                    setLoadingCheck(false)
                }

            }
        )()
    }, [username]);


    const createUser = async () => {
        const params = {userName: username};
        const user = await Moralis.Cloud.run("checkUser", params);

        if (username !== "") {
            const userObj = user.filter(item => item.attributes.username === username)

            if (username !== '' && !loadingCheck && !alreadyTaken) {
                const recoveryPhrase = shuffle(recoveryPhraseText).join(" ");
                const newAccount = web3Js.eth.accounts.create();
                const privateKey = newAccount.privateKey;
                const ethAddress = newAccount.address;
                const encryptionKeyStore = web3Js.eth.accounts.encrypt(privateKey, recoveryPhrase);

                newUser.set('username', username);
                newUser.set('password', recoveryPhrase);
                newUser.set('recoveryPhrase', recoveryPhrase)
                newUser.set('ethAddress', ethAddress);
                newUser.set('keyStore', encryptionKeyStore);
                // newUser.signUp()
                nextPage(username);
            } else {
                // nextPage('Visibility');
                setAlreadyTaken(true)
            }
        }
    }

    /*const nextPage = (recoveryPhrase) => {
        navigation.push("RecoveryPhrase", {recoveryPhrase: recoveryPhrase});
    } */
    const nextPage = (userName) => {
        navigation.push("VisibilityScreen", {
            userName
        });
    }

    const shuffle = (array) => {
        //we will use this function to shuffle the recovery phrase each time a new user created account
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    return (
        <SafeAreaView style={styles.mainBody}>
            <KeyboardAwareScrollView

                scrollEnabled
                style={{
                    width: '100%'
                }}
                contentContainerStyle={styles.keyboardAvoidingViewStyle}>
                <View style={{
                    width: '100%',
                    justifyContent: 'flex-start'
                }}>


                    <Image
                        source={require('../../../../frontend/create-username.png')}
                        style={{width: '100%'}}
                    />

                    <View style={styles.headLineContainer}>
                        <Text style={styles.pickUsernameText}>Pick your username</Text>
                        <Text style={styles.subText}>This is how other Wallet users can find you and send you
                            payments</Text>
                    </View>
                </View>

                <View style={{
                    width: '100%',
                    height: heightPixel(120),
                    justifyContent: 'flex-end',
                    bottom: 0,

                }}>



                    <View style={styles.formContainer}>
                      {/*  <TouchableOpacity
                            disabled={username === "" ? true : false}
                            style={[styles.button, {backgroundColor: username === "" ? 'gray' : '#1652F0'}]}
                            onPress={() => createUser()}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>*/}
                        <View style={styles.charWrap}>


                            <Text style={{
                                color: '#8e8e8e',
                                fontWeight: '400',
                                fontSize: fontPixel(14)
                            }}>
                                @
                            </Text>
                        </View>
                        <TextInput
                            focusable={true}
                            autoFocus
                            defaultValue={username}
                            style={styles.inputStyle}
                            returnKeyType="done"
                            returnKeyLabel="Done"
                            onSubmitEditing={createUser}
                            onChangeText={(e) => setUsername(e)}
                        />

                    </View>

                    {
                        username !== '' && loadingCheck &&
                        <View style={{width: '90%',marginLeft:20, marginTop:12, alignItems: 'center', flexDirection:'row', marginBottom: 10}}>
                            <ActivityIndicator size="small" color={Colors.greyColor}/>
                       <Text style={{
                           fontFamily:'DaxlinePro-Medium',
                           fontSize:12,
                       }}>
                           Checking...
                       </Text>
                        </View>
                    }


                     {!loadingCheck && alreadyTaken &&
                        <View style={{width: '90%', marginLeft:20, marginTop:12, alignItems: 'center',  flexDirection: 'row',marginBottom: 10}}>
                              <Icon name="close-circle" size={14} color="red"/>
                            <Text style={{color: 'red'}}> Username is taken</Text>
                        </View>
                    }
      {username !== '' && !loadingCheck && !alreadyTaken &&
                        <View style={{width: '80%', marginLeft:20,  marginTop:12, alignItems: 'center', flexDirection: 'row', marginBottom: 10}}>
                            <Icon name="checkmark-circle" size={14} color="#3AB795"/>
                            <Text style={{color: '#3AB795',       fontFamily:'DaxlinePro-Bold'}}> Available</Text>
                        </View>
                    }
                </View>
            </KeyboardAwareScrollView>

        </SafeAreaView>
    );
};
export default CreateUsername;

const styles = StyleSheet.create({
    button: {
        width: 88,
        height: 34,
        borderRadius: 20,
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 9999,
        right: 10,
        top: 8
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 12,
        color: '#fff'
    },
    formContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#F7F8FA',
        height: heightPixel(60)
    },
    mainBody: {
        flex: 1,
        backgroundColor: "white",
        alignContent: "center",
    },
    headLineContainer: {
        marginLeft: 25,
        marginTop: 30
    },
    inputStyle: {
        width: '100%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 5,
        paddingLeft: 20
    },
    pickUsernameText: {
        fontFamily: 'DaxlinePro-Bold',
        fontWeight: '700',
        fontSize: 20
    },
    subText: {
        lineHeight:20,
            fontFamily: 'DaxlinePro-Medium',
        fontSize: 13,
        color: "rgba(0, 0, 0, 0.5)",
        marginTop: 15
    },
    keyboardAvoidingViewStyle: {

        flex: 1,
        width: '100%',
        alignItems: 'center',

    },
    charWrap:{
         alignItems: 'center',
                            width: '10%',
                            height: '100%',
                            borderRadius: 20,
                            justifyContent: 'center',
                            left: 10,
    }
});
