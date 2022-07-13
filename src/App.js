import React, { useEffect, useMemo, useRef, useState } from "react";
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

import CallService from "./API/CallService";

function App() {

  useEffect(() => {
    fetchCalls()
  }, [])

  const [calls, setCalls] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = useCalls(calls, filter.sort, filter.query);
  const [isCallsLoading, setIsCallsLoading] = useState(false);



  async function fetchCalls() {
    setIsCallsLoading(true)
    setTimeout(async () => {
      const calls = await CallService.getAll();
      setCalls(calls)
      setIsCallsLoading(false);
    }, 1000);

  }

  const createCall = (newCall) => {
    setCalls([...calls, newCall])
    setModal(false)
  }



  const removeCall = (call) => {
    setCalls(calls.filter(c => c.id !== call.id))

  }

  return (
    <div className="App">
      <button onClick={fetchCalls}>Data</button>
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
      {isCallsLoading
        ? <h1>ЗАВАНТАЖЕННЯ.....</h1>
        : <CallList remove={removeCall} calls={sortedAndSearchedPosts} title="Перелік викликів ТРАДИЦІЙНИЙ ПРОЦЕС" />
      }



    </div>
  );
}

export default App;
// Stop time 00:36:00!