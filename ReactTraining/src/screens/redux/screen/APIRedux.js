import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions
} from 'react-native';
import axios from 'axios';
import { connect } from "react-redux";
import {APIAction} from '../action/action';
import colorPick from '../../../constants/styles/color';
import picName from '../../../constants/styles/picName';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class APIRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isRefreshing: false,
        };
    }

    handleRefresh = () => {
        this.setState({
            isRefreshing: true,
        }, () => {
            this.hitAPI(val= 0)
        });
    };

    handleLoadMore = () => {
        this.hitAPI(val= 1);
    };

    componentDidMount() {
        this.hitAPI(val= 1)
    }

    FlatListItemSeparator = () => {
        return (
          <View
            style={styles.separator}
          />
        );
      }

    hitAPI = (val) => {

        <ActivityIndicator size='large' hidesWhenStopped='true' color='red' animating={this.state.isLoading} style={styles.loading} />

        this.setState({ isLoading: true });

        axios.get('https://reqres.in/api/users?delay=2')
            .then(response => {
                const userData1 = response.data.data;
                this.setState({
                    isLoading: false,
                    isRefreshing: false,
                });
                this.props.APIAction(userData1, val)
            }).catch(err => {
                console.warn("err", err)
            })
    }

    render() {
        const { isRefreshing } = this.state;
        return (
            <SafeAreaView>
                <View style={{ height: "100%" }}>
                    <FlatList
                        ListFooterComponent={
                            <ActivityIndicator size='large'
                                hidesWhenStopped='true'
                                color='red'
                                animating={this.state.isLoading}
                            />
                        }
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        data={this.props.userAPIData}
                        renderItem={({ item }) => (
                            <View style={{alignItems: 'center'}}>
                                <Image
                                    onLoad={(e) => this.setState({ isLoading: false })}
                                    onError={(e) => this.setState({ isLoading: false })}
                                    onLoadStart={(e) => this.setState({ isLoading: true })}
                                    source={{ uri: item.avatar }}
                                    style={styles.pic}
                                    defaultSource={picName.pic2}
                                />
                            <View style={styles.card}>
                                <Text style={{ paddingTop: 15, paddingBottom: 15, color: colorPick.darkGreen, fontWeight: 'bold' }}>{item.first_name} {item.last_name}</Text>
                                <Text style={{ color: colorPick.darkGreen }}>{item.email}</Text>
                                </View>
                                
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        refreshing={isRefreshing}
                        onRefresh={this.handleRefresh}
                        onEndReached={this.handleLoadMore}
                        onEndReachedThreshold={0.01}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
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
        marginTop: screenWidth/10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: screenWidth/1.5,
        borderTopWidth: 2,
        borderLeftWidth: 2
    },
    pic: { 
        height: 60, 
        width: 60, 
        borderBottomRightRadius: 10,
        position: 'absolute',
        right: screenWidth/1.5,
        top: screenHeight/20 
    },
    separator: {
        flex: 1,
        justifyContent: 'center',
        height: 2,
        width: "75%",
        backgroundColor: colorPick.darkGreen,
        marginLeft: screenWidth / 8,
        marginTop: screenWidth / 20,
        opacity: 0.5
      },
})

const mapStateToProps = state => {
    const { userAPIData } = state.countereducer;
    return {
        userAPIData,
    };
};

const mapDispatchToProps = dispatch => ({
    APIAction: (userData, val) => dispatch(APIAction(userData, val)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(APIRedux);