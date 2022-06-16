import React from 'react'
import CallItem from './CallItem'

const CallList = ({calls, title}) => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                {title}
                </h1>
            {calls.map((call) =>
             <CallItem call={call} key={call.id} />
            )}
            </div>
    )
}

export default CallList