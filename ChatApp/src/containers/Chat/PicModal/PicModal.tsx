import React, { memo } from 'react';
import { View, Image, Modal, TouchableOpacity } from 'react-native';
import Styles from './Styles'

interface AppProps {
    visible?: boolean,
    handleAction?: Function,
    image?: any
}

export default memo(function Modals(props: AppProps) {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={props.visible}
        >
            <TouchableOpacity activeOpacity = {1} onPress={() => props.handleAction && props.handleAction()} style={Styles.container}>
                <TouchableOpacity activeOpacity = {1} style={Styles.modalBody}>
                    <Image source={props.image} resizeMode='contain' style={Styles.pic} />
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
})