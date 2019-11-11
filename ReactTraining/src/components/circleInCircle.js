import {View} from 'react-native';


export default function circleInCircle(outerColor, innerColor, height, width){
    return(
    <View style={{backgroundColor: outerColor, height: height, width: width, borderRadius: (height/2), flex: 1}}>
        <View style={{backgroundColor: innerColor, height: height, width: width, borderRadius: (height/2), flex: 1}}>
            </View>

        </View>
    );
}