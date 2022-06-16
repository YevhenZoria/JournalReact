import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import './styles/App.css';
import CallItem from './components/CallItem'
import CallList from "./components/CallList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/Input/MyInput";

function App() {
  const [callsTP, setCallsTP] = useState([
    { id: 1, Problem: 'Перша проблема на традиційному процесі', Remedy: 'Рішення' },
    { id: 2, Problem: 'Друга проблема на традиційному процесі', Remedy: 'Рішення' },
    { id: 3, Problem: 'Третя проблема на традиційному процесі', Remedy: 'Рішення' },
    { id: 4, Problem: 'Четверта проблема на традиційному процесі', Remedy: 'Рішення' },
    { id: 5, Problem: "П'ята проблема на традиційному процесі", Remedy: 'Рішення' },
    { id: 6, Problem: 'Шоста проблема на традиційному процесі', Remedy: 'Рішення' },
  ])
  const [callsMP, setCallsMP] = useState([
    { id: 1, Problem: 'Перша проблема на сучасному процесі', Remedy: 'Рішення' },
    { id: 2, Problem: 'Друга проблема на сучасному процесі', Remedy: 'Рішення' },
    { id: 3, Problem: 'Третя проблема на сучасному процесі', Remedy: 'Рішення' },
    { id: 4, Problem: 'Четверта проблема на сучасному процесі', Remedy: 'Рішення' },
    { id: 5, Problem: "П'ята проблема на сучасному процесі", Remedy: 'Рішення' },
    { id: 6, Problem: 'Шоста проблема на сучасному процесі', Remedy: 'Рішення' },
  ])

  const [problem, setProblem] = useState('')

  const addNewCall = (e) => {
    e.preventDefault()
    console.log(problem)
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={problem}
          onChange = {e => setProblem(e.target.value)} 
          type="text" 
          placeholder="Опис проблеми" />
        <MyInput type="text" placeholder="Метод вирішення" />
        <MyButton onClick={addNewCall}>Створити виклик!</MyButton>
      </form>
      <CallList calls={callsTP} title="Перелік викликів ТРАДИЦІЙНИЙ ПРОЦЕС" />
      <CallList calls={callsMP} title="Перелік викликів СУЧАСНИЙ ПРОЦЕС" />


    </div>
  );
}

export default App;
// Stop time 00:36:00!