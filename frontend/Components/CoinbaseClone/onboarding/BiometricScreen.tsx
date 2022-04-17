import React, {useLayoutEffect} from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, View, Text} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontPixel, heightPixel} from "../../../utils/normalize";


interface NavigationProps {
    navigation?: {
        goBack: () => void,
        navigate: (screen: string) => void,
        push: (screen: string, {}) => void,
        setOptions: (options: any) => void
    },
    routes?: {
        params: any
    }
}


const BiometricsScreen = ({navigation}: NavigationProps) => {

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

    return (
        <SafeAreaView style={styles.mainBody}>
            <View style={{
                width: '100%',
                height: heightPixel(300)
            }}>

            </View>


            <View style={{


                alignItems: "center",
                width: '100%',
     height: heightPixel(500),
                      justifyContent: 'flex-end',
            }}>
                <View style={{
                    width: '90%',

                    alignItems: 'flex-start',


                }}>


                    <Text style={styles.title}>
                        Protect Your Wallet
                    </Text>
                    <Text style={styles.subtitle}>
                        Add an extra layer of security to keep your crypto safe.
                    </Text>
                </View>

                <View style={styles.stackButtons}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.legalButtons}>
                            <MaterialCommunityIcons name="face-recognition" size={24} color="#1652F0"/>
                            <View style={{
                                flexDirection: "column",
                                width: '70%',
                                height: '100%',
                                justifyContent: 'space-evenly'
                            }}>
                                <Text style={styles.textBtn}>
                                    Use Face ID
                                </Text>
                                <Text style={{
                                    fontSize: fontPixel(12),
                                    color: "#1652F0",
                                    fontWeight:"500"
                                }}>
                                    Recommended

                                </Text>
                            </View>
                            <Icon name="chevron-forward" size={24} color="#111"/>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.legalButtons, {
                            borderTopWidth: 0.5,
                            borderTopColor: '#ccc',
                        }]}>
                            <Icon name="keypad" size={24} color={"#b2b2b2"}/>
                            <View style={{flexDirection: "column", width: '70%'}}>
                                <Text style={styles.textBtn}>
                                    Set up Passcode
                                </Text>
                            </View>
                            <Icon name="chevron-forward" size={24} color="#333"/>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: fontPixel(22),
        color: "#000",
        fontWeight: "500",
        fontFamily:"DaxlinePro-Bold"
    },
    subtitle: {
        width: '90%',
        lineHeight: heightPixel(22),
        marginTop: 10,
        fontSize: fontPixel(16),
        color: '#333',

    },
    stackButtons: {
        height: heightPixel(260),
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    btnContainer: {
        width: '95%',
        height: heightPixel(200),
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#d7d7d7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    legalButtons: {

        width: '100%',
        padding: 15,
        height: '45%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textBtn: {
        fontSize: fontPixel(18),
        fontWeight: '400',
        color: '#333'
    },
});


export default BiometricsScreen;
