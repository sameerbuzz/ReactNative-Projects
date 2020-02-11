import { NativeModules, NativeEventEmitter } from 'react-native';

let value: string = ''
class Counter extends NativeEventEmitter{
    decrement = async () => {
        try {
            const res = await NativeModules.Counter.decrement()
            console.warn(res)
        } catch (e) {
            console.warn(e.message, e.code)
        }
    }

    increment = async () => {
        try {
            const res = await NativeModules.Counter.inc()
            console.warn(res)
        } catch (e) {
            console.warn(e.message, e.code)
        }
    }

    counterVal = (callback: Function) => {
        NativeModules.Counter.getCount((myvalue: string, number: string, name: string) => {
            callback(myvalue)
        })
    }
    
}
export default new Counter(NativeModules.Counter)