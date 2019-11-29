import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { width, totalSize } from 'react-native-dimension';
import {connect } from "react-redux";
import {click} from './redux/action';

import PickImage from '../../components/ImagePickerFn';
import MyIcons from '../../constants/icons';
import TabBar from './tabNavigation';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

class Home extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

camera = () => {
    PickImage.getCamera(res => {
        this.props.click(res)
      })
}

    render() {
        return (
            <View style={styles.mainView}>
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
                {/* <View style={styles.iconView}> */}
                <MyIcons.FontAwesome
                    style={styles.camIcon}
                    name="camera" size={totalSize(2.4)}
                    color="rgba(255,255,255,0.5)"
                    onPress={this.camera}
                />
                {/* </View> */}
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { img } = state.countereducer;
    return {img};
};

const mapDispatchToProps = dispatch => ({
    click: (pic) => dispatch(click(pic)),
})

const styles = StyleSheet.create({
    mainView: {
        flex: 2,
        backgroundColor: '#005F53',
    },
    oneView: {
        backgroundColor: '#005F53',
        padding: screenWidth / 20,
        paddingTop: Platform.OS === 'ios' ? screenHeight / 20 : screenHeight/50,
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
        fontFamily: 'Roboto-Medium'
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    icon: {
        marginLeft: screenWidth/10,
    },
    camIcon: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? totalSize(9.5) : totalSize(7),
        left: totalSize(1.5),
    },
    iconView: {
        
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);