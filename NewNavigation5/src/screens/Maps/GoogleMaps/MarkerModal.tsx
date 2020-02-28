import React from 'react'
import { Text, View, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux'

/**
 * custom imports
 */
import Styles from './Styles'
import { updateMarkers } from '../../../modules/Maps/Action';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface AppProps {
    navigation?: any,
    updateMarkers: Function,
    marker: Array<any>,
    route?: any
}
interface AppState {
    markerTitle: string,
    markerDescription: string,
}

class MarkerModal extends React.PureComponent<AppProps, AppState>  {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            markerTitle: '',
            markerDescription: '',
        }
    }

    handleBack = () => {
        this.props.navigation.Dismiss()
    }

    render() {
        return (
            <View style={Styles.containerStyle}>
                <View style={Styles.dialogboxStyle}>
                    <TextInput style={Styles.markerFields} placeholder='Enter title' onChangeText={(text: string) => this.setState({ markerTitle: text })} value={this.state.markerTitle} />
                    <TextInput style={Styles.markerFields} placeholder='Enter description' onChangeText={(text: string) => this.setState({ markerDescription: text })} value={this.state.markerDescription} />
                    <View style={Styles.bottomButtonView}>
                        <TouchableOpacity style={Styles.createButton} onPress={() => {
                            this.props.updateMarkers({ coordinates: this.props.route.params.laglat, title: this.state.markerTitle, description: this.state.markerDescription }), this.props.navigation.pop()
                        }}>
                            <Text>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.createButton} onPress={() => { this.props.navigation.pop() }}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        updateMarkers: (arr: Array<any>) => dispatch(updateMarkers(arr))
    }
}

const mapStateToProps = (state: any) => {
    const { marker } = state.MyMaps
    return {
     marker
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MarkerModal);