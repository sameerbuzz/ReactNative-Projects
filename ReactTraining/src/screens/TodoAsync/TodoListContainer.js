import React, { Component } from 'react';
import {
    View,
    Alert,
    FlatList,
    Keyboard,
    TextInput,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    KeyboardAvoidingView
} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { width, totalSize } from 'react-native-dimension';

//custom imports
import colorPick from '../../constants/styles/color';
import FlatlistComponent from './FlatlistComponent';

Icons.loadFont()
const screenHeight = Dimensions.get('window').height;
const keyboardVerticalOffset = Platform.OS === 'ios' ? screenHeight/10 : 0

export default class TodoListContainer extends Component {

    state = {
        dataArray: [],
        task: '',
        id: '',
        isCompleted: false,
        isLoading: true,
        editing: false
    };
    static navigationOptions = ({ navigation }) => {  
        return{
        title: "TODO LIST",
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: totalSize(3),
            color: 'white'
        },
        headerLeft: <Icons name={'keyboard-arrow-left'}
                        size={totalSize(4.5)}
                        color='white'
                        onPress={ () => { navigation.pop(2) }} 
                        />,
 
        headerRight: () => (
            <Icons
                        name="delete-forever"
                        size={totalSize(4.5)}
                        color='white'
                        onPress={() => { _this.deleteAlert(-1) }}
                    />
          ),
        } 
    };

    componentDidMount() {
        _this = this;
       this.refreshData()
    }

    refreshData = () => {
        <ActivityIndicator
            size='large'
            hidesWhenStopped='true'
            color='red'
            animating={this.state.isLoading}
            style={styles.loading}
        />
        AsyncStorage.getItem('dataArray', (err, stores) => {
            if(stores){
                stores = JSON.parse(stores)
            this.setState({
                dataArray: stores,
            })
            }
            this.setState({
                isLoading: false
            })
            
        });
    }

    toggleState (id) {
        let temp = this.state.dataArray
        let index = temp.findIndex(a => a.id === id)
            if (index !== -1){
                let newToggle = !temp[index].isCompleted
        let payload = {
            task: temp[index].task,
            id: id,
            isCompleted: newToggle
        };      
            temp.splice(index, 1, payload)
            this.setState({
                dataArray: temp.splice(0),
                isCompleted: newToggle
            }, () => { AsyncStorage.setItem('dataArray', JSON.stringify(this.state.dataArray)) })
        }
        this.setState({
            isCompleted: !this.state.isCompleted,
        })           
    }

    editData = (id) => {
        let temp = this.state.dataArray
        let index = temp.findIndex(a => a.id === id)
        let getTask = temp[index].task
        this.setState({
            task: getTask,
            id : id,
            editing: true,
        })
    }
    
    handleUpdate = () => {
        const { task, id, isCompleted } = this.state
        if (this.state.id != '' ){
            let payload = {
                task: task,
                id: id,
                isCompleted: isCompleted
            };
            let newData = this.state.dataArray
            let index = newData.findIndex(a => a.id === id)
            newData.splice(index, 1 , payload)
            this.setState({
                dataArray: newData.splice(0),
                task: '',
                id: '',
                isCompleted: false,
                editing: false
            }, () => this.pushDataToAsync(this.state.dataArray))
        }else {
            Alert.alert(
                'ERROR',
                'Please Enter some item',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: true },
            );
        }
        this.textInput.clear()
    }

    handleOnClick = () => {
        const { task, id, isCompleted } = this.state
        if (this.state.task != '') {
            let payload = {
                task: task,
                id: (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1),
                isCompleted: isCompleted
            };
            let newData = this.state.dataArray
            newData.push(payload)
            this.setState({
                dataArray: newData.splice(0),
                task: '',
                id: '',
                isCompleted: false
            }, () => this.pushDataToAsync(this.state.dataArray))

        }
          else {
            Alert.alert(
                'ERROR',
                'Please Enter some item',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: true },
            );
        }
        this.textInput.clear()
    }

    pushDataToAsync = (newData) => {
        AsyncStorage.setItem('dataArray', JSON.stringify(newData))
    }

    deleteAlert = (key) => {
        Alert.alert(
            key === -1 ? 'Do you want to Empty this TODO list ?':'Do you want to Delete this TODO Item ?',
            '',
            [
                {
                    text: 'Delete',
                    onPress: () => this.deleteCard(key),
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
    }

    deleteCard = (key) => {
        if (key === -1){
            
            this.setState({
                dataArray: []
            }, () => {AsyncStorage.clear()})     
        }
        else{
            let temp = this.state.dataArray
            let index = temp.findIndex(a => a.id === key)
            if (index !== -1){
            temp.splice(index, 1)
            this.setState({
                dataArray: temp.splice(0)
            }, () => { AsyncStorage.setItem('dataArray', JSON.stringify(this.state.dataArray)) })
        } }
        this.textInput.clear()
    }

    handleRefresh = () => {
        this.setState({
            isLoading: true
        })
        this.refreshData()
    };

    renderItem = (rowData) => {
        let { item } = rowData
        return (
            <FlatlistComponent
            task={item.task}
            id={item.id}
            isCompleted= {item.isCompleted}
            callDelete={() => this.deleteAlert(item.id)}
            callCheckState = {() => this.toggleState(item.id)}
            callEdit = {() => this.editData(item.id)}
            />
        );
    }

    render() {
        return (
            <View style={styles.mainView}>
                <FlatList
                    ref={(ref) => { this.myFlatlist = ref }}
                    numColumns={2}
                    refreshing={this.state.isLoading}
                    onRefresh={this.handleRefresh}
                    onContentSizeChange={() => {
                        this.myFlatlist.scrollToEnd({ animated: true })
                    }}
                    scrollToEnd={this.state.dataArray}
                    data={this.state.dataArray}
                    keyExtractor={(id) => id.toString()}
                    renderItem={this.renderItem}
                />
                <KeyboardAvoidingView behavior="position" enabled keyboardVerticalOffset={keyboardVerticalOffset}>
                <View style={styles.textView}>
                    <TextInput
                        returnKeyType='done'
                        multiline={true}
                        numberOfLines={1}
                        value={this.state.task}
                        placeholder='Add new ToDo Item here'
                        onChangeText={(text) => this.setState({ task: text })}
                        style={styles.textSize}
                        ref={input => { this.textInput = input }}
                        onSubmitEditing={() => {
                            Keyboard.dismiss()
                            this.textInput.clear()
                            this.handleOnClick()
                        }}
                    />
                    <Icons
                        name= {this.state.editing ? "update" : "add-circle"}
                        size={totalSize(5)}
                        color={colorPick.darkGreen}
                        onPress={() => {
                            Keyboard.dismiss()
                            this.textInput.clear()
                            this.state.editing ? this.handleUpdate() :this.handleOnClick()
                        }}
                    />                  
                </View>  
                </KeyboardAvoidingView>  
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginTop: 5
    },
    textView: {
        flexDirection: 'row',
        margin: totalSize(2),
        marginBottom: totalSize(5),
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textSize: {
        borderWidth: 1,
        width: "80%",
        padding: width(4),
        borderRadius: 10,
        fontSize: totalSize(2),
    },
})