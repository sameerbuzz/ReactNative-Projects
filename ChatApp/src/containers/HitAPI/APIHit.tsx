import React, { ReactElement } from 'react';
import { View, Text, ActivityIndicator, FlatList, Linking } from 'react-native';
import Styles from './Styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import { hitApiAction } from '../Animation/Action';

const newsAPI = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-01-25&sortBy=publishedAt&apiKey=9a99f910e4574db2bf82664a88ce8ce6&pageSize=10'

export interface AppProps {
    // newsArray: Array<any>;
    // hitApiAction: Function
}

function APIHIT({ navigation }: any): ReactElement {
    // constructor(props: AppProps) {
    //     super(props);
    // }
    // componentDidMount(){
    //     console.warn('okk mount');
    //     this.props.hitApiAction(newsAPI)
    // }

    const { newsArray } = useSelector((state: {
        Nav: any
    }) => ({
        newsArray: state.Nav.newsArray
    }));
    const dispatch = useDispatch()
    React.useEffect(() => {
        console.warn(" inb effect");
        dispatch({type:"HIT_API",payload:{endpoint:newsAPI}})
    },[])

    const renderItems = (rowData: any) => {
        const { item, index } = rowData
        return (
            <View style={Styles.cardView}>
                <Text>Index: {index + 1}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>{item.source.name}</Text>
                    <Text>{new Date(item.publishedAt).toDateString()}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text>{new Date(item.publishedAt).toLocaleTimeString()}</Text>
                </View>
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                <Text>
                    <Text>{item.description}</Text>
                    <Text style={{ fontWeight: 'bold' }} onPress={() => Linking.openURL(item.url)}>...read more</Text>
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {item.author !== null ? <Text>-{item.author}</Text> : <Text>-Anonymous</Text>}
                </View>
            </View>
        )
    }

    // public render() {
    //     console.warn(this.props.newsArray);

    return (
        <View style={Styles.mainView}>
            <FlatList
                // showsVerticalScrollIndicator={false}
                data={newsArray}
                keyExtractor={(item, index) => index.toString()}
                // refreshing={isRefreshing}
                // onRefresh={handleRefresh}
                renderItem={renderItems}
                // onEndReached={hitAPI}
                onEndReachedThreshold={0.01}
                ListFooterComponent={
                    <ActivityIndicator size='large' hidesWhenStopped={true} color='red' animating={false} />
                }
            />
        </View>
    );
}


// const mapStateToProps = (state: any) => {
//     const { newsArray } = state.Nav;
//     return {
//         newsArray,
//     }
// }
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         hitApiAction: (newsAPI: string) => {
//             console.warn('okk yo');
//             dispatch({
//                 type: "HIT_API", payload: {
//                     endpoint: newsAPI
//                 }
//             })
//         }
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(APIHIT);
export default APIHIT;
