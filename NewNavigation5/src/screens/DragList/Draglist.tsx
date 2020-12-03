import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'

interface Props {

}
const exampleData = [...Array(20)].map((d, index) => ({
    key: `item-${index}`, // For example only -- don't use index as your key!
    label: index,
    backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
        5}, ${132})`
}));

const Draglist = (props: Props) => {
    const [data, setData] = useState(exampleData)

    const renderItem = ({ item, index, drag, isActive }) => {
        return (
            <TouchableOpacity
                style={{
                    height: 100,
                    backgroundColor: isActive ? "blue" : item.backgroundColor,
                    alignItems: "center",
                    justifyContent: "center"
                }}
                onLongPress={drag}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 32
                    }}
                >
                    {item.label}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <DraggableFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onDragEnd={({ data }) => setData(data)}
            />
        </View>
    )
}

export default Draglist

const styles = StyleSheet.create({})
