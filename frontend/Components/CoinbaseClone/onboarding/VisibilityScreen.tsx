import React, {useLayoutEffect, useState} from 'react';
import {Text, StyleSheet, ScrollView, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {fontPixel, heightPixel} from "../../../utils/normalize";
import Colors from '../../../constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons';


const VisibilityScreen = ({navigation}) => {

    const [visibility, setSetVisibility] = useState('public');


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
            <ScrollView scrollEnabled showsVerticalScrollIndicator={false} style={{
                width:'100%'
            }} contentContainerStyle={{
                alignItems:'center',

            }}>


            <View style={{
                width:'100%',
             height:heightPixel(300)
            }}>

            </View>

            <View style={{

                alignItems: "center",
                width: '100%',

            }}>
                <View style={{
                    width:'90%',
                    alignItems:'flex-start'
                }}>


                    <Text style={styles.title}>
                        Set your privacy preferences
                    </Text>
                    <Text style={styles.subtitle}>
                        You can always change this later in the settings
                    </Text>
                </View>


                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => setSetVisibility('Public')} style={[styles.button,{
                                borderColor: visibility === 'Public' ? "#1652F0" : "#e8e8e8",
                    }]}>
                                 <View style={[styles.row,{
                                     width: "50%",
                                     alignItems: 'center'
                                 }]}>
                        <Text style={styles.buttonText}>
                            Public
                        </Text>
                        <Text style={{
                            fontSize:fontPixel(16),
                            color:"#c9d6ff",
                            marginLeft:10,
                        }}>
                                Recommended
                            </Text>
                                 </View>
                         <View style={styles.row}>
                        <Text style={styles.buttonSubText}>
                            Other wallet users can search for my username and send me crypto
                        </Text>
                             <Icon name={"eye-sharp"} size={20} color="#1652F0"/>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSetVisibility('Private')} style={[styles.button,{
                                borderColor: visibility === 'Public' ? "#e8e8e8" :  "#1652F0"
                    }]}>
                        <View style={styles.row}>


                            <Text style={styles.buttonText}>
                                Private
                            </Text>

                        </View>
                        <View style={styles.row}>
                            <Text style={styles.buttonSubText}>
                                Other wallet users cannot search for my username
                            </Text>
                            <Icon name={"eye-off-sharp"} size={20} color={"#c1c1c1"}/>
                        </View>
                    </TouchableOpacity>
                </View>
<View style={{
    width:'90%',
}}>
    <Text style={{
        color:"#949494",
        fontSize:fontPixel(14),
        lineHeight:18,
    }}>
        Crypto transaction take place on public blockchain. when your username is set to public,
        advanced users can look up your addresses on the blockchain and view your transaction history.

    </Text>
</View>

            </View>
         </ScrollView>

            <TouchableOpacity>
                <View style={styles.buttonNext}>
                    <Text style={{
                        color:"#fff",
                        fontFamily:'DaxlinePro-Bold',
                        fontSize:fontPixel(18)
                    }}>
                        Next
                    </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        alignContent: 'center'
    },
    title: {
        fontSize:fontPixel(20),
        color: "#000",
fontWeight:"700"
    },
    subtitle: {
        width:'70%',
        lineHeight:heightPixel(20),
        marginTop: 10,
        fontSize: fontPixel(16),
        color: '#333',

    },
    buttonText: {
        fontSize: fontPixel(18),
        color: '#111',
        fontWeight: 'bold',
    },
    button: {
        width: '90%',
        height: heightPixel(120),
        borderRadius: 15,
        borderWidth:2,

        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        padding:15,
        margin: 10,

    },
    buttonContainer: {
        height: heightPixel(300),
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop:10,
        alignItems: 'center'
    },
    buttonSubText: {
        width:"85%",
         fontSize: fontPixel(14),
        color: '#111',
        fontWeight: '400',
    },
    row: {
        width:'100%',
justifyContent:'space-between',
        alignItems:'flex-start',
        flexDirection:'row'
    },
    buttonNext:{
        alignItems:'center',
         alignSelf: 'center',
    backgroundColor: '#1652F0',
    width: '90%',
    height: 58,
    borderRadius: 15,
    justifyContent: 'center'
    }
});

export default VisibilityScreen;
