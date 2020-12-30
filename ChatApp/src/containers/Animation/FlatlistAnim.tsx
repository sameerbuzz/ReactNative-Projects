import React from 'react';
import {View, Animated, FlatList, Platform, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const SPACING = 10;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;

interface Props {}

const FlatlistAnim = (props: Props) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: 'white', width: '100%'}}>
      <View style={{height: BACKDROP_HEIGHT, width, position: 'absolute'}}>
        <FlatList
          removeClippedSubviews={false}
          contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
          data={colorBack.reverse()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            const translateX = scrollX.interpolate({
              inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
              outputRange: [0, width],
            });

            return (
              <Animated.View
                style={{
                  position: 'absolute',
                  height,
                  overflow: 'hidden',
                  backgroundColor: item.name,
                  width: translateX,
                }}
              />
            );
          }}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'white']}
          style={{
            height: BACKDROP_HEIGHT,
            width,
            position: 'absolute',
            bottom: 0,
          }}
        />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        bounces={false}
        data={color}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',
          });

          if (!item.name) {
            return <View style={{width: EMPTY_ITEM_SIZE}} />;
          }

          return (
            <Animated.View
              style={{
                width: ITEM_SIZE,
                marginTop: 150,
                height: 400,
                backgroundColor: 'transparent',
                padding: 20,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [{translateY}],
              }}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  padding: 20,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: item.name,
                    borderRadius: 10,
                  }}
                />
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default FlatlistAnim;

const color = [
  {key: 'left-spacer'},
  {name: 'red'},
  {name: 'green'},
  {name: 'blue'},
  {name: 'black'},
  {name: 'yellow'},
  {key: 'right-spacer'},
];
const colorBack = [
  {name: 'red'},
  {name: 'green'},
  {name: 'red'},
  {name: 'yellow'},
  {name: 'blue'},
  {name: 'black'},
];
