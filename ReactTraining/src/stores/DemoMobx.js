import { observable, action } from "mobx"

class Demo {
    @observable name = ''
    @observable dataArray = []
    @action todo() {
        this.dataArray.push(this.name)
    }
}
export default new Demo();