import React from 'react';
import { 
    View, 
    Image, 
    StyleSheet,
    Text,
} from 'react-native';
import { bold } from 'ansi-colors';

export default function Static() {
    return(
        <View style= {styles.mainStyle}>
            <Image source = {require('../1566799228.png')} style ={styles.imgStyle}/>
            <View style={styles.fragView}>
                <View style={{margin: 20, flexDirection: 'row'}}>
                <View style={styles.fragStyle}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, paddingBottom: 10,}}>Roads Less Travelled</Text>
                    <Text style={{color: 'grey', fontSize: 12}}>1day left</Text>
                </View>
                <View style={{flex: 0.3, flexDirection: 'column', alignItems: 'flex-end'}}>
                    <Text style={{color: 'grey'}}>Total Prize</Text>
                    <View style={{flexDirection: "row",}}>
                        <Text style={{ color: '#eb982d', paddingTop: 10,}}>$</Text><Text style={{ color: '#eb982d', fontSize: 25}}>200</Text>
                    </View>
                </View>
                </View>
                <View style={styles.cardView}>
                <View style={styles.eachCard}>
                    <Image source={require('./first.png')} style={styles.badgeStyle}/>
                    <View style={styles.badgePrize}>
                        <Text style={styles.cardTextOne}>1st Prize</Text>
                        <Text style={styles.cardTextTwo}>$125</Text>
                    </View>
                </View>
                <View style={styles.eachCard}>
                    <Image source={require('./second.png')} style={styles.badgeStyle}/>
                    <View style={styles.badgePrize}>
                        <Text style={styles.cardTextOne}>1st Prize</Text>
                        <Text style={styles.cardTextTwo}>$60</Text>
                    </View>
                </View>
                <View style={styles.eachCard}>
                    <Image source={require('./third.png')} style={styles.badgeStyle}/>
                    <View style={styles.badgePrize}>
                        <Text style={styles.cardTextOne}>1st Prize</Text>
                        <Text style={styles.cardTextTwo}>$35</Text>
                    </View>
                </View>
            </View>
            <View style={styles.descriptionStyle}>
                <View style={{flexDirection: "row", alignItems: 'center'}}>
                    <Image style={{aspectRatio: 1, height: 1}} source = {require('./desc.png')} />
                        <Text style={{fontWeight: 'bold', fontSize: 20,}}>Description</Text>
                        </View>
                    <View style={{ flexDirection: 'column', marginLeft: 40}}>
                    <Text style={{ color: 'grey'}}>This challenge is all about uploading the posts. This challenge is all about uploading the posts.</Text>
                    </View>
            </View>
            <View style={styles.descriptionStyle}>
                <View style={{flexDirection: "row", alignItems: 'center'}}>
                    <Image style={{maxHeight: 60, maxWidth: 60}} source = {require('./tick.png')} />
                        <Text style={{fontWeight: 'bold', fontSize: 20,}}>Rules</Text>
                        </View>
                    <View style={{ flexDirection: 'column', marginLeft: 40}}>
                        <View style={{flexDirection: 'row', paddingBottom: 6}}>
                            <Image style={{maxHeight:15, maxWidth: 15}} source={require('./green.png')} />
                            <Text style={{ color: 'grey', paddingLeft: 3}}>This challenge is all about uploading the posts. This challenge is all about uploading the posts.</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingBottom: 6}}>
                            <Image style={{maxHeight:15, maxWidth: 15}} source={require('./green.png')} />
                            <Text style={{ color: 'grey', paddingLeft: 3}}>This challenge is all about uploading the posts.</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingBottom: 6}}>
                            <Image style={{maxHeight:15, maxWidth: 15}} source={require('./green.png')} />
                            <Text style={{ color: 'grey', paddingLeft: 3}}>This challenge is all about uploading the posts. This challenge is all about uploading the posts.</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingBottom: 6}}>
                            <Image style={{maxHeight:15, maxWidth: 15}} source={require('./green.png')} />
                            <Text style={{ color: 'grey', paddingLeft: 3}}>This challenge is all about uploading the posts.</Text>
                        </View>
                    </View>
            </View>
            </View>
        </View>
    );
}

styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
    },
    fragView: {
        flex: 1,
        borderRadius: 10,
    },
    imgStyle: {
        flex: 0.2,
    },
    fragStyle: {
        flex: 1, 
        flexDirection: 'column',
    },
    cardView: {
        margin: 20,
        marginTop: 0,
        flex: 1,
        flexDirection: "row",
    },
    eachCard: {
        margin: 5,
        flexDirection: 'row',
        flex: 1,
        shadowColor : 'grey',
        shadowOpacity : 0.2,
        shadowRadius: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    badgePrize: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: "flex-end", 
        padding: 5,
    },
    cardTextOne: {
        color: 'grey', 
        fontSize: 10,
    },
    cardTextTwo: {
        color: 'green', 
        fontSize: 16,
        paddingTop: 3,
    },
    descriptionStyle: {
        margin: 20,
        marginTop: 0,
    },
    badgeStyle: {
        aspectRatio: 1,
        height: 20
    },
});