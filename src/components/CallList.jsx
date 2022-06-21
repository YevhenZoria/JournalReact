import React from 'react'
import CallItem from './CallItem'

const CallList = ({calls, title, remove}) => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                {title}
                </h1>
            {calls.map((call, index) =>
             <CallItem remove={remove} number={index +1} call={call} key={call.id} />
            )}
            </div>
    )
}

export default CallList