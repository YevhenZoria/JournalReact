import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import './styles/App.css';
import CallItem from './components/CallItem'
import CallList from "./components/CallList";
import CallForm from "./components/CallForm";

function App() {
  const [calls, setCalls] = useState([
    { id: 1, problem: 'Перша проблема на традиційному процесі', remedy: 'Рішення' },
    { id: 2, problem: 'Друга проблема на традиційному процесі', remedy: 'Рішення' },
    { id: 3, problem: 'Третя проблема на традиційному процесі', remedy: 'Рішення' },
    { id: 4, problem: 'Четверта проблема на традиційному процесі', remedy: 'Рішення' },
    { id: 5, problem: "П'ята проблема на традиційному процесі", remedy: 'Рішення' },
    { id: 6, problem: 'Шоста проблема на традиційному процесі', remedy: 'Рішення' },
  ])

  const createCall = (newCall) => {
    setCalls([...calls, newCall])
  }

  const removeCall = (call) => {
    setCalls(calls.filter(c => c.id !== call.id))
    console.log(call)
  }

  return (
    <div className="App">
      <CallForm create={createCall} />
      <CallList remove = {removeCall} calls={calls} title="Перелік викликів ТРАДИЦІЙНИЙ ПРОЦЕС" />


    </div>
  );
}

export default App;
// Stop time 00:36:00!