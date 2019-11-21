import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import MyIcons from '../../constants/icons';
import TabBar from './tabNavigation';

export default class home extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.mainView}>

                <View style={styles.oneView}>
                    <View>
                        <Text style={styles.headerText}>WhatsApp</Text>
                    </View>
                    <View style={styles.search}>
                        <MyIcons.Octicons
                            name="search"
                            size={totalSize(2.4)}
                            color='white'
                            style={styles.icon}
                        />
                        <MyIcons.Octicons
                            name="kebab-vertical"
                            size={totalSize(2.4)}
                            color='white'
                            style={styles.icon}
                        />
                    </View>
                </View>
                <View style={styles.twoView}>
                    <TabBar />
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    mainView: {
        flex: 2,
        backgroundColor: '#005F53',
    },
    oneView: {
        backgroundColor: '#005F53',
        padding: width(5),
        paddingTop: height(2),
        paddingBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.08,
    },
    twoView: {
        flex: 1.92,

    },
    headerText: {
        color: 'white',
        fontSize: width(5),
        fontWeight: '600'
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    icon: {
        marginLeft: width(10),

    },

})