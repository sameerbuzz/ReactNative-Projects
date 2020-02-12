import React, { Component } from 'react';
import { Button, FlatList, Image, NativeModules, TouchableOpacity, View, Platform } from 'react-native';
import { ImagePickerFn } from '../../components';
// const {RNImageFilter}=NativeModules

export interface AppProps {
}

export interface AppState {
    imageSoure: string,
    imageArraySoure: Array<any>
}

export default class AppComponent extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)
        this.state = {
            imageSoure: "",
            imageArraySoure: []

        }
    }

    imageFillter = async (i: number) => {
        let result = await new Promise((resolve, reject) => {
            NativeModules.RNImageFilter.getSourceImage({
                imageSource: this.state.imageSoure,
                dataType: "Path",
                filterType: i
            }, (source: any) => {
                resolve(source.base64)
            });
        })
        return (result)
    }

    onPress = () => {
        ImagePickerFn.getSinglePic((response: any) => {
            this.setState({
                imageSoure: Platform.OS === 'ios' ? "file:///" + response.path : response.path
            })
        })
    }

    FilterImage = async () => {
        if (!this.state.imageSoure) {
            alert("Please choose image")
        } else {
            let tempArray: Array<any> = [];
            for (let i = 0; i < 10; i++) {
                let data = await this.imageFillter(i);
                tempArray.push({ "FillterImage": Platform.OS === 'ios' ? data : "file://" + data })
            }

            this.setState({
                imageArraySoure: tempArray
            }, () => {

            })
        }
    }

    onImagePress = (FillterImage: string) => {
        this.setState({
            imageSoure: FillterImage
        })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Image source={{ uri: this.state.imageSoure }} style={{ height: 300, width: 300 }} />
                <Button title={"Select Photo"} onPress={(() => this.onPress())} />
                <Button title={"Show Filters"} onPress={(() => this.FilterImage())} />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    data={this.state.imageArraySoure}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.onImagePress(item.FillterImage)
                        } style={{ alignItems: 'center' }}>
                            <Image source={{ uri: item.FillterImage }} style={{ height: 100, width: 100 }}
                                resizeMode={"contain"} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}
