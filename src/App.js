import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import './styles/App.css';
import CallItem from './components/CallItem'
import CallList from "./components/CallList";

function App() {
  const [calls, setCalls] = useState([
    { id: 1, Problem: 'Перша проблема', Remedy: 'Рішення' },
    { id: 2, Problem: 'Друга проблема', Remedy: 'Рішення' },
    { id: 3, Problem: 'Третя проблема', Remedy: 'Рішення' },
    { id: 4, Problem: 'Четверта проблема', Remedy: 'Рішення' },
    { id: 5, Problem: "П'ята проблема", Remedy: 'Рішення' },
    { id: 6, Problem: 'Шоста проблема', Remedy: 'Рішення' },
  ])

  return (
    <div className="App">
      <CallList calls={calls} />

    </div>
  );
}

export default App;
// Stop time 00:36:00!