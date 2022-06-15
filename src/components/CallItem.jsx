import React from 'react'

const CallItem = (props) => {

  return (
    <div className="call">
      <div className="call__content">

        <strong>{props.call.id}. {props.call.Problem}  </strong>
        <div>
          {props.call.Remedy}
        </div>
      </div>
      <div className="call_btns">
        <button>Delete</button>
      </div>
    </div>
  )
}

export default CallItem;