import React, {useLayoutEffect} from 'react';

import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {fontPixel, heightPixel} from "../../../utils/normalize";
import Button from "../onboarding/components/Button";

const LegalScreen = ({navigation}) => {
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
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>

            <View style={styles.legalWrap}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: fontPixel(28),
                    color: '#333'
                }}>
                    Legal
                </Text>
                <Text style={styles.subText}>
                    Please review the Coinbase Wallet Privacy Policy and Terms of Service
                </Text>
            </View>

            <View style={styles.stackButtons}>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.legalButtons}>
                        <Text style={styles.textBtn}>
                            Terms of Service
                        </Text>
                        <Icon name="chevron-forward" size={20} color="#111"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.legalButtons,{
                        borderTopWidth:0.5,
                        borderTopColor:'#ccc',
                    }]}>
                        <Text style={styles.textBtn}>
                            Privacy Policy
                        </Text>
                        <Icon name="chevron-forward" size={20} color="#333"/>
                    </TouchableOpacity>
                </View>
            </View>
            <Button buttonName={'Accept'} action={() => navigation.push('CreateUsername')}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
        legalWrap: {
            height: heightPixel(300),
            width: '100%',
            padding: 20,

        },
        subText: {
            fontSize: fontPixel(16),
            color: '#333',
            lineHeight: heightPixel(26)
        },
        stackButtons: {
            height: heightPixel(400),
            bottom: 0,
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
            padding:15,
            height: '45%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        textBtn: {
            fontSize:fontPixel(18),
            fontWeight:'400',
            color:'#333'
        },
    }
)

export default LegalScreen;
