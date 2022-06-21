import React from 'react'
import MyButton from "./UI/button/MyButton";

const CallItem = (props) => {

  return (
    <div className="call">
      <div className="call__content">

        <strong>{props.number}. {props.call.problem}  </strong>
        <div>
          {props.call.remedy}
        </div>
      </div>      
      <div className="call_btns">
        <MyButton onClick={()=>props.remove(props.call)}>
          Delete
          </MyButton> 
      </div>
    </div>
  )
}

export default CallItem;