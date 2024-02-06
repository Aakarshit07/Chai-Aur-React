/* eslint-disable react/jsx-key */
import { useMemo, useRef, useState } from "react"

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value
    if(value === "") return;
    setItems((prev) => ([...prev, value]));
    inputRef.current.value = "";
  }
  
  const filteredItems = useMemo(() => {
    return items.filter((item) => (
      item.toLowerCase().includes(query.toLowerCase())
    ))
  }, [items, query]);

  return (
    <>
      Search: 
      <input value={query} onChange={e => setQuery(e.target.value)} type="search" />
      <br />
      <br />
      <form onSubmit={onSubmit}>
      New Item: <input ref={inputRef} type="text" />
      <button>Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item) => <div>{item}</div>)}
    </>
  )
}

export default App
