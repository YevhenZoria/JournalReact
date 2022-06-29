import React from 'react'
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/Input/MyInput";

const CallFilter = ({filter, setFilter}) => {
  return (
    <div>
    <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Пошук..."
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort=>setFilter({...filter, sort: selectedSort})}
        defaultValue={"Сортувати"}
        options={[
          { value: 'problem', name: 'По опису проблеми' },
          { value: 'remedy', name: 'По вирішенню проблеми' }
        ]}
      />
      </div>
  )
}

export default CallFilter