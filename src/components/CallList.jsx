import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import CallItem from './CallItem'

const CallList = ({ calls, title, remove }) => {

    if (!calls.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Викликів не знайдено!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                {title}
            </h1>
            <TransitionGroup>
                {calls.map((call, index) =>
                <CSSTransition
                key={call.id}
                timeout = {500}
                classNames= "call"
                >
                    <CallItem remove={remove} number={index + 1} call={call}  />
                    </CSSTransition>
                )}  
            </TransitionGroup>

        </div>
    )
}

export default CallList