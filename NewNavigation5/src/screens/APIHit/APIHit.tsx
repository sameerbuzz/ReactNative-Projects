import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ActivityIndicator, FlatList, Linking, Alert } from 'react-native';
import Styles from './Styles';
import { vw } from 'src/constants';
import { useDispatch, useSelector } from "react-redux";
import { LOADING_API } from '../../modules/SignIn/Type';

 interface AppProps {
    navigation?: any
}
let page = 1
let newsAPI = 'http://newsapi.org/v2/everything?q='
let endAPI = '&from=2020-01-25&sortBy=publishedAt&apiKey=9a99f910e4574db2bf82664a88ce8ce6&pageSize=10&page='

export default function App(props: AppProps) {

    const [myRefresh, setMyRefresh] = useState(false)
    const [query, setQuery] = useState('')
    let emptyRedux: boolean
    const { newsArray, isloading } = useSelector((state: {
        APIHit: any
    }) => ({
        newsArray: state.APIHit.newsArray,
        isloading: state.APIHit.isloading,
    }));
    const dispatch = useDispatch()

    useEffect(() => {
    }, []);

    const hitAPI = () => {
        if (query !== '') {
            dispatch({ type: LOADING_API, payload: { data: newsAPI + query + endAPI + page, array: newsArray, emptyRedux: emptyRedux } })
        }
        setMyRefresh(false)
    }

    const loadMore = () => {
        emptyRedux = false
        hitAPI()
    };

    const handleRefresh = () => {
        page = 1
        setMyRefresh(true)
        emptyRedux = true
        hitAPI()
    };

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

    return (
        <View style={Styles.mainView}>
            <TextInput style={Styles.searchBar} placeholder='Search' onChangeText={(text: string) => setQuery(text)} onEndEditing={handleRefresh} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={newsArray}
                keyExtractor={(item, index) => index.toString()}
                refreshing={myRefresh}
                onRefresh={handleRefresh}
                renderItem={renderItems}
                onEndReached={loadMore}
                onEndReachedThreshold={1}
                ListFooterComponent={
                    <ActivityIndicator size='large' hidesWhenStopped={true} color='red' animating={isloading} />
                }
            />
        </View>
    );
}
