import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native';
import { width, totalSize } from 'react-native-dimension';
import CheckBox from 'react-native-check-box';
import Icons from 'react-native-vector-icons/MaterialIcons';

//custom imports
import colorPick from '../../constants/styles/color';
const screenWidth = Dimensions.get('window').width;
Icons.loadFont()

class FlatlistComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.cardView}>
                <ScrollView>
                    <Text style={styles.cardText}>{this.props.task}</Text>
                </ScrollView>
                <View style={{ justifyContent: 'space-between', alignItems: 'baseline', }}>
                    <CheckBox
                        checkBoxColor='white'
                        onClick={this.props.callCheckState}
                        isChecked={this.props.isCompleted}
                    />
                    <Icons
                        name="edit"
                        size={totalSize(4)}
                        color='white'
                        onPress={this.props.callEdit}
                    />
                    <Icons
                        name="delete"
                        size={totalSize(4)}
                        color='white'
                        onPress={this.props.callDelete}
                    />
                </View>
            </View>
        );
    }
}

export default FlatlistComponent;
const styles = StyleSheet.create({

    cardView: {
        padding: width(2),
        margin: width(5), borderRadius: 10,
        backgroundColor: colorPick.darkGreen,
        width: screenWidth / 2.35,
        marginRight: 0,
        marginBottom: 0,
        height: screenWidth / 2.35,
        flexDirection: 'row'
    },
    cardText: {
        fontSize: totalSize(2),
        color: 'white',
        padding: 10,
    },
})
