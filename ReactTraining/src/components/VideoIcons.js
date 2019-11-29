import MyIcons from '../constants/icons';
import React from 'react';
import { Text, View } from 'react-native';
import colorPick from '../constants/styles/color';

const VideoIcons = () => (
    <View style={{flex: 1, height: 50, width: 50, backgroundColor: 'blue'}}>
        <MyIcons.FontAwesome5 
         name="video"
         size={screenWidth / 14}
         color={colorPick.darkGreen}
         style={{  height: 50, width: 50}}
        />
    </View>
);

export default VideoIcons;
