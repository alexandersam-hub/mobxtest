import {makeAutoObservable, makeObservable} from "mobx"
class Counter{
    count = 0
    constructor(){
        makeAutoObservable(this)

    }

    increment(){
        console.log('1')
        this.count ++
    }
    decrement(){
        this.count--
    }
}
export default new Counter()