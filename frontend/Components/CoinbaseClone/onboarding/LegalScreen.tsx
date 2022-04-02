import React from 'react';

import {Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {fontPixel, heightPixel} from "../../../utils/normalize";


const LegalScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
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
                    color:'#333'
                }}>
                    Legal
                </Text>
                <Text style={styles.subText}>
                    Please review the Coinbase Wallet Privacy Policy and Terms of Service
                </Text>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    legalWrap: {
        height: heightPixel(300),
        width: '100%',
        padding: 20,

    },
    subText:{
        fontSize:fontPixel(16),
        color:'#333',
        lineHeight:heightPixel(26)
    }
})

export default LegalScreen;
