import React from 'react'
import counter from '../store/store'
import {observer} from 'mobx-react-lite'

const Counter = observer(()=>{
    return(
        <div>
            <span>{counter.count}</span>
            <button onClick={()=>{counter.increment()}}>+</button>
            <button onClick={()=>{counter.decrement()}}>-</button>
        </div>
    )
})

export default Counter