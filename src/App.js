import React, { useMemo, useRef, useState } from "react";
import Counter from "./components/Counter";
import './styles/App.css';
import CallItem from './components/CallItem'
import CallList from "./components/CallList";
import CallForm from "./components/CallForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/Input/MyInput";
import CallFilter from "./components/CallFilter";
import AddCallModal from "./components/MyModal/AddCallModal";
import MyButton from "./components/UI/button/MyButton";
import { useCalls } from "./hooks/useCalls";

function App() {
  const [calls, setCalls] = useState([
    { id: 1, problem: 'Перша проблема на традиційному процесі', remedy: '1Рішення' },
    { id: 2, problem: 'Друга проблема на традиційному процесі', remedy: '2Рішення' },
    { id: 3, problem: 'Третя проблема на традиційному процесі', remedy: '3Рішення' },
    { id: 4, problem: 'Четверта проблема на традиційному процесі', remedy: '4Рішення' },
    { id: 5, problem: "П'ята проблема на традиційному процесі", remedy: 'я Рішення' },
    { id: 6, problem: 'Шоста проблема на традиційному процесі', remedy: '0 Рішення' },
  ])


  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = useCalls(calls, filter.sort, filter.query);




  const createCall = (newCall) => {
    setCalls([...calls, newCall])
    setModal(false)
  }

  const removeCall = (call) => {
    setCalls(calls.filter(c => c.id !== call.id))

  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Додати виклик</MyButton>
      <AddCallModal visible={modal} setVisible={setModal}>
        <CallForm create={createCall} />
      </AddCallModal>

      <hr style={{ margin: '15px 0' }}></hr>
      <CallFilter
        filter={filter}
        setFilter={setFilter}
      />
      <CallList remove={removeCall} calls={sortedAndSearchedPosts} title="Перелік викликів ТРАДИЦІЙНИЙ ПРОЦЕС" />
    </div>
  );
}

export default App;
// Stop time 00:36:00!