import {StyleSheet} from 'react-native';
import {vh, vw, Color} from '../../constants';

const Styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: 'center',
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
  headingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: vh(50),
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
    alignItems: 'center',
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
  closeView: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: vh(20),
  },
  volView: {
    height: vh(30),
    width: vh(30),
    tintColor: Color.newViolet,
    margin: vh(10)
  },
});
export default Styles;
