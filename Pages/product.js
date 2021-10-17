import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card, Button, FAB } from 'react-native-elements';
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import { Root, Popup } from 'popup-ui'
import CounterInput from "react-native-counter-input";


var price = 0;
var quantity1=0;
var quantity2=0;
var quantity3=0;

export default function product() {
    return (
        <Root>
        <View>
            <ScrollView>
            <Card>
                <Image source={require('../components/images/products/ipad.png')} style={style.product_templet}/>
                <Text style={{marginBottom: 5, marginTop: 5 }} h2>
                    Ipad
                </Text>
                <Text style={style.price} h4>
                    $ 600
                </Text>
                <Text h6 style={style.description}>
                    this is a tablet
                </Text>
                <CounterInput style={{marginLeft: '25%'}} horizontal={true}
                onChange={(counter) => {
                    quantity1=counter;
                }}
                />
                <Button
                type="clear"
                title='Add'
                onPress={() => price=price+(600*quantity1)} />
                <View>
                <Button
                type="clear"
                title='delete'
                onPress={() =>  price=price-(600*quantity1)} />
                </View>
            </Card>
            <Card>
                <Image source={require('../components/images/products/iphone.webp')} style={style.product_templet}/>
                <Text style={{marginBottom: 5, marginTop: 5 }} h2>
                    Iphone 13
                </Text>
                <Text style={style.price} h4>
                    $ 700
                </Text>
                <Text h6 style={style.description}>
                   this a iphone
                </Text>
                <CounterInput style={{marginLeft:'25%'}} horizontal={true}
                onChange={(counter) => {
                    quantity2=counter;
                }}
                />
                <Button
                type="clear"
                title='Add'
                onPress={() => price=price+(700*quantity2)} />
                <Button
                type="clear"
                title='delete'
                onPress={() => price=price-(700*quantity1)} />
            </Card>
            <Card>
                <Image source={require('../components/images/products/dellxps.webp')} style={style.product_templet}/>
                <Text style={{marginBottom: 5, marginTop: 5 }} h2>
                    Dell XPS 13
                </Text>
                <Text style={style.price} h4>
                    $ 1000
                </Text>
                <Text h6 style={style.description}>
                    this is a laptop
                </Text>
                <CounterInput style={{marginLeft:'25%'}} horizontal={true}
                onChange={(counter) => {
                    quantity3=counter;
                }}
                />
                <Button
                type="clear"
                title='Add'
                onPress={() => price=price+(1000*quantity3)} />
                <Button
                type="clear"
                title='delete'
                onPress={() => price=price-(1000*quantity1)} />
            </Card>

            <TouchableOpacity style={style.chcekoutbutton} onPress={() => Popup.show({
                type: 'Success',
                title: 'proceed to payment',
                textBody: 'your total purches is of '+ price+'$',
                buttontext: 'ok',
                callback: () => Popup.hide()
                })}>
                <MaterialCommunityIcons name="cart" color={'black'} size={26}/>
                <Text>checkout</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
        </Root>
    )
}

const style = StyleSheet.create({
    product_templet: {
        flex:1,
        flexDirection: 'row',
        marginTop:10,
        padding: 10,
        width: 100,
        height: 110,
        marginBottom: 10,
        
    },
    chcekoutbutton:{
        marginTop:20,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        marginLeft: '25%',
        width:200,
        borderRadius:30,
        backgroundColor: "#45b1e8",
    },
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 20
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    },
    countbutton:{
        width: 35,
        height: 25,
        justifyContent: 'center',
        flexDirection:'column',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#45b1e8',
        marginLeft: '25%'
    },
    countbutton2:{
        width: 35,
        height: 25,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#45b1e8',
        marginRight: '20%'
    }
})