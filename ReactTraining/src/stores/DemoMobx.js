import { observable, action } from "mobx"

class Demo {
    @observable name = ''

    @observable dataArray = []
    @observable userData = []
    @observable isLoading = true
    @observable isRefreshing = false
    @observable isChecked = false
    @observable checkList = []

    @action todo() {
        this.dataArray.push(this.name)
    }   

    @action deleteCard(index){
        var stop = this.dataArray.length - 1;
        while (index < stop) {
            this.dataArray[index] = this.dataArray[++index];
        }
        this.dataArray.pop();
      }

}
export default new Demo();
