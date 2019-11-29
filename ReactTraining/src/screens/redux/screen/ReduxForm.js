import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList,
    Dimensions
} from 'react-native';
import { connect } from "react-redux";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import colorPick from '../../../constants/styles/color';
import { addData } from '../action/action';

DATA = [
    { title: 'First Name', },
    { title: 'Last Name', },
    { title: 'Place' },
]
let currentfn = '', currentln = '', currentplace = '';

class ReduxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

     card = async () => {
        await this.props.addData(currentfn, currentln, currentplace)
        console.warn("fsd", this.props.showData);
        return (
            <View style={{ backgroundColor: 'blue', height: 400 }}>
                <FlatList
                    data={this.props.showData}
                    keyExtractor={(item, index) => index.toString}
                    renderItem={this.renderItems()}
                />
            </View>
        );
    }

    renderItems = async (rowData) => {
        console.warn('done', 'data ', rowData);
        return (
            <View style={{ backgroundColor: 'red', height: 1000 }}>
                {/* <Text>{rawData.fn}</Text>
                    <Text>{rawData.ln}</Text>
                    <Text>{rawData.place}</Text> */}
                <Text>{rowData}</Text>
            </View>
        );

    }

    render() {
        return (
            <View style={styles.mainView} >
                <View>
                    <View style={styles.textViewOne} >
                        <TextInput
                            style={styles.nameInput}
                            value={this.props.showData.fn}
                            onChangeText={(text) => { currentfn = text }}
                            placeholder='First Name'
                            placeholderTextColor={colorPick.darkGreen}
                            returnKeyType='next'
                            onSubmitEditing={() => { this.secondInput.focus()}}
                            ref={(ref) => { this.firstInput = ref }}
                        />
                    </View>
                    <View style={styles.textViewOne} >
                        <TextInput
                            style={styles.nameInput}
                            value={this.props.showData.ln}
                            onChangeText={(text) => { currentln = text }}
                            placeholder='Last Name'
                            placeholderTextColor={colorPick.darkGreen}
                            returnKeyType='next'
                            onSubmitEditing={() => { this.thirdInput.focus() }}
                            ref={(ref) => { this.secondInput = ref }}
                        />
                    </View>
                    <View style={styles.textViewOne} >
                        <TextInput
                            style={styles.nameInput}
                            value={this.props.showData.place}
                            onChangeText={(text) => { currentplace = text }}
                            placeholder='Department'
                            placeholderTextColor={colorPick.darkGreen}
                            returnKeyType='done'
                            onSubmitEditing={() => { this.card }}
                            ref={(ref) => { this.thirdInput = ref }}
                        />
                    </View>
                </View>
                <View style={styles.textViewOne} >
                    <TouchableOpacity style={styles.loginBtn} onPress={this.card}>
                        <Text style={styles.loginText} > Show </Text>
                    </TouchableOpacity >
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'column',
        marginTop: screenWidth / 15,
        flex: 1
    },
    textViewOne: {
        flexDirection: 'row',
        margin: screenWidth / 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameInput: {
        color: colorPick.darkGreen,
        height: screenHeight / 20,
        paddingLeft: screenWidth / 25,
        paddingRight: screenWidth / 30,
        borderColor: '#c0c2c2',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderBottomRightRadius: 5,
        fontSize: screenWidth / 23,
        width: '100%',
        fontWeight: '600'
    },
    loginBtn: {
        backgroundColor: colorPick.darkGreen,
        borderRadius: 10,
        height: screenWidth / 8,
        alignItems: 'center',
        padding: screenWidth / 50,
        width: screenWidth / 2
    },
    loginText: {
        fontWeight: '600',
        fontSize: screenWidth / 15,
        color: 'white'
    },
});

const mapStateToProps = state => {
    const { showData } = state.countereducer;
    return {showData};
};

const mapDispatchToProps = dispatch => ({
    addData: (f,l,p) => dispatch(addData(f,l,p)),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ReduxForm);
