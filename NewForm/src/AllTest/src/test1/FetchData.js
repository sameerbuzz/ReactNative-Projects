import React, { Component } from 'react';
import { 
    View, 
    Text,
    FlatList, 
    ActivityIndicator,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
export default class FetchData extends Component {
    
  constructor(props) {
    super(props);
    const num = 0
    this.state = {
        userData: [],
        isLoader: true,
        show: -1,
        search: 'Noida'
    };
  }

componentDidMount(){
  this.handleUrl();
}

toggle=(key)=>{
    this.setState({
        show: this.state.show === key ? -1 : key,
    })
}

handleUrl(){
    return fetch('https://newsapi.org/v2/everything?q='+this.state.search+'&apiKey=5dbea5cfd8654ff4b958fe799cdd49b9')
    .then(response => response.json())
    .then((responseJson) =>{
        this.setState({
            userData: responseJson.articles,
            isLoader: false,
        })
    }).catch(err=> {
        console.warn('err', err)
    })
}

onLoaderLoad() {
    console.warn('onLoadStart');
    <View style={{backgroundColor: 'red', height: 30, width: 30, position: 'absolute'}}>
    <ActivityIndicator 
    size='large' 
    animating='true' 
    color= 'red'
    style={{
        position: 'absolute', 
        left: 0, 
        right: 0, 
        top: 20, 
        bottom: 0, 
        alignItems: 'center',
        justifyContent: 'center'}}/>
        </View>
}

countLoad() {
    console.warn('onLoad')
}

static navigationOptions = {
    title: 'Hit API & Fetch Data',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25
    },
  };
  render() {
    return (  
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20,}}>
            <Image source={require('../../assets/sort.png')} style={{height: 30, width: 30, }} />
            <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 30,  color: '#00A2B0',fontFamily: 'Snell Roundhand'}}>Sameer</Text>
            <Image source={require('../../assets/tune.png')} style={{height: 30, width: 30, }} />
        </View>
        <View style={{paddingLeft: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>Home</Text>
            <TextInput placeholder='Enter City' style={styles.search} value={this.state.search} onChangeText={(text) => this.setState({search : text})} onSubmitEditing={this.handleUrl.bind(this)}/> 
            <Image source={require('../../assets/search1.png')} style={styles.searchImg}/>
        </View>
        <View style={{backgroundColor: '#dcdfe3',}}>
          <ActivityIndicator size='large' animating={this.state.isLoader} style={styles.loading}/>
          <View>
         <FlatList 
            contentContainerStyle={{flexGrow:1}}
            data={this.state.userData}
            keyExtractor = {(item,index)=>index.toString()}
            renderItem={({item,index})=> {
                return(
                    <View syle={{flexDirection: 'row',}}>
                    <View style={styles.flat}> 
                        <View style={styles.card}>
                            <View style={{ marginLeft: 140}}>
                                <Text style={styles.mytext} numberOfLines={this.state.show === index ? null : 2}>{item.title}</Text> 
                               <View style={{flexDirection: 'row', paddingTop: 5}}>
                                    <Image source={require('../../assets/person.png')} style={{height: 15, width: 15}} />
                                    <Text style={styles.author}>{(item.author) == null ? 'Unknown' : item.author}</Text>
                              </View>
                              <Text style={{color: '#626362', fontSize: 11}}>{new Date(item.publishedAt).toDateString()}</Text>
                              <Text style={styles.mytextOne} numberOfLines={this.state.show === index ? null : 2}>{item.content == null ? item.description : item.content}</Text>
                               <View style={{alignItems: 'flex-end'}}>
                                    <TouchableOpacity  onPress={() => this.toggle(index)} style={styles.btnRead}>
                                        <Text style={{color: '#00A2B0'}}>{this.state.show === index ? 'Hide' : 'Read'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> 
                       </View>
                    </View>
                        <View style={styles.imgView}>
                            <Image style={styles.img}
                            source={{ uri: (item.urlToImage == null) ? 'https://cdn.stocksnap.io/img-thumbs/960w/IDVPUQVYIJ.jpg' : item.urlToImage }} 
                            //source={{uri:  item.urlToImage}}
                            // defaultSource={require('./add.png')}
                            onLoadStart={this.onLoaderLoad}
                            onLoad={this.countLoad}
                            onLoadEnd={console.warn('onLoadEnd')}
                             
                            />
                        </View>   
                    </View>
                )      
            }}
        />
       
    </View>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    flat: {
        margin: 20,
        flexDirection: 'row',
        
    },
    card: {
        borderRadius: 10,
        padding: 5,
        marginTop: 30,
        backgroundColor: 'white',
    },
    mytext: {
        fontWeight: 'bold'
    },
    
    imgView: {
        height: 130,
        width: 120,
        borderRadius: 10,
        position: 'absolute',
        marginLeft: 35,
        marginTop: 35,
    },
    img: {
        height:'100%',
        width:'100%',
        borderRadius: 10,
    },
    search: {
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 20,
        fontSize: 25,
        margin: 20,
        marginLeft: 0,
        backgroundColor: '#dcdfe3',
    },
    searchImg: {
        position: 'absolute',
        height: 30,
        width: 30,
        marginTop: 65,
        marginLeft: 30,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 200,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnRead: {
        borderColor: '#00A2B0', 
        alignItems: 'center', 
        width: 60, 
        height: 30, 
        paddingTop: 5, 
        borderWidth: 1, 
        borderRadius: 5, 
        marginTop: 5
    },
    author: {
        color: 'grey',
        paddingLeft: 5,
        fontSize: 11
    }
})