import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { observer } from "mobx-react"
import React, { Component } from 'react';
import CheckBox from 'react-native-check-box';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { width, height, totalSize } from 'react-native-dimension';

//custom imports
import Demo from '../../stores/DemoMobx';
import picName from '../../constants/styles/picName';
import colorPick from '../../constants/styles/color';

Icons.loadFont()

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

@observer
export default class MobXPagination extends Component {

    static navigationOptions = {
        title: 'Pagination',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25
        },
    };

    componentDidMount() {
        this.hitAPI()
    }

    hitAPI = () => {
        <ActivityIndicator
            size='large'
            hidesWhenStopped='true'
            color='red'
            animating={Demo.isLoading}
            style={styles.loading}
        />
        Demo.isLoading = true;
        axios.get('https://reqres.in/api/users?delay=2')
            .then(response => {
                const userData1 = response.data.data;
                Demo.userData = userData1;
                Demo.isLoading = false;
                Demo.isRefreshing = false;
                Demo.checkList = Demo.userData.length
            }).catch(err => {
                console.warn("err", err)
            })
    }

    handleRefresh = () => {
        Demo.isRefreshing = true;
        this.hitAPI()
    };

    handleLoadMore = () => {
        Demo.isLoading = true;
        axios.get('https://reqres.in/api/users?delay=2')
            .then(response => {
                const userData1 = response.data.data;
                Demo.userData = Demo.userData.concat(userData1);
                Demo.isLoading = false;
                Demo.isRefreshing = false;
                Demo.checkList = Demo.userData.length
            }).catch(err => {
                console.warn("err", err)
            })
    };

    deleteData = (index) => {
        var stop = Demo.userData.length - 1;
    while (index < stop) {
        Demo.userData[index] = Demo.userData[++index];
    }
    Demo.userData.pop();
    }

    checkState = (index) => {
       myData = Demo.checkList
       let myIndex = myData.findIndex(a => a.index === index)
       if (myIndex >-1){
            myData[myIndex] = !Demo.isChecked
       }
       Demo.checkList = myData.splice(0)
       
    }

    render() {
        return (
            <SafeAreaView style={styles.mainView}>
                <FlatList
                    ListFooterComponent={
                        <ActivityIndicator size='large'
                            hidesWhenStopped='true'
                            color='red'
                            animating={Demo.isLoading}
                        />
                    }
                    data={Demo.userData.slice()}
                    renderItem={({ item, index }) => (
                        <View style={styles.card}>
                            <Image
                                onLoad={() => Demo.isLoading = false}
                                onError={() => Demo.isLoading = false}
                                onLoadStart={() => Demo.isLoading = true}
                                source={{ uri: item.avatar }}
                                style={styles.img}
                                defaultSource={picName.pic1}
                            />
                            <View>
                            <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
                            <Text style={styles.name2}>{item.email}</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                            <CheckBox 
                                checkBoxColor = 'white'
                                onClick={()=> this.checkState(index)}
                                isChecked = {Demo.isChecked}
                            />
                            <Icons
                                name="delete"
                                size={height(4.5)}
                                color= 'white'
                                onPress = {() => this.deleteData(index)}
                            />
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={Demo.isRefreshing}
                    onRefresh={this.handleRefresh}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.01}
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    mainView : {
        marginBottom: totalSize(2), 
        marginTop: totalSize(0.5)
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        margin: width(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colorPick.darkGreen,
        borderRadius: width(5),
        padding: width(4)
    },
    name: {
        color: 'white',
        fontSize: width(5)
    },
    name2: {
        paddingTop: height(1),
        color: 'white',
        fontSize: width(4)
    },
    img: {
        height: height(10),
        width: height(10),
        borderRadius: height(5)
    }
})