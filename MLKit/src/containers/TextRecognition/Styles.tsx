import {StyleSheet} from 'react-native';
import {vh, vw, Color} from '../../constants';

const Styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  firstHalfView: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  halfView: {
    flex: 0.55,
  },
  cardView: {
    padding: vw(10),
    margin: vw(20),
    width: vw(200),
    height: vw(150),
    borderRadius: vw(15),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: vw(17),
  },
  mainTextView: {
    alignItems: 'center',
  },
  textView: {
    borderWidth: vh(1),
    borderColor: Color.newViolet,
    padding: vw(20),
    borderRadius: vw(15),
    height: vh(300),
  },
  textInputStyle: {
    width: vw(300),
    height: vh(260),
    color: Color.newViolet,
    alignSelf: 'flex-start',
  },
  cardView2: {
    padding: vw(10),
    margin: vw(20),
    width: vw(150),
    height: vw(80),
    borderRadius: vw(15),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  resultTextView: {
    borderWidth: vw(2),
    borderColor: Color.newViolet,
    padding: vw(20),
    width: vw(350),
    borderRadius: vw(10),
    height: vh(215),
  },
  resultText: {
    color: Color.newViolet,
    alignSelf: 'center',
  },
  indicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  sameer: {
    color: Color.newViolet,
    marginTop: vh(10),
    alignSelf: 'center',
  },
});
export default Styles;
