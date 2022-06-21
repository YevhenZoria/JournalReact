// import React from 'react'
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/Input/MyInput";
import React, { useRef, useState } from "react";


const CallForm = ({create}) => {
  const [call, setCall] = useState({problem: '', remedy: ''})
  
  const addNewCall = (e) => {
      e.preventDefault()
    const newCall = {
        ...call, id: Date.now() 
    }
    create(newCall)
      setCall({problem: '', remedy: ''})
   
  }
    return (
        <form>
            <MyInput
                value={call.problem}
                onChange={e => setCall({ ...call, problem: e.target.value })}
                type="text"
                placeholder="Опис проблеми" />
            <MyInput
                value={call.remedy}
                onChange={e => setCall({ ...call, remedy: e.target.value })}
                type="text"
                placeholder="Метод вирішення" />
            <MyButton onClick={addNewCall}>Створити виклик!</MyButton>
        </form>
    )
}

export default CallForm