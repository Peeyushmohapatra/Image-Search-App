import { useState, useEffect, createContext } from "react";
import "./App.css";
import Display from "./Components/Display/Display";

export const Context = createContext();
function App() {
  const [searchFor, setSearchfor] = useState("");
  const [search, setSearch] = useState("");
  const [api, setApi] = useState([]);

  useEffect(() => {
    apiCall();
  },[searchFor]);

  async function apiCall() {
    const api = await fetch(
      `https://api.unsplash.com/search/collections?per_page=20&page=1&query=${searchFor ? searchFor :"office"}&client_id=cMkLVH48tinw1eWOkAlJawIVZptoHlVBFn20ikN5viw`
    );
    const apiRes = await api.text();
    const jsonData = JSON.parse(apiRes);
    setApi(jsonData.results);
  }
  return (
    <div className="App">
      <h1 className="h1" style={{textAlign:"center"}}>IMAGE SEARCH APP</h1>
      <div className="inputContainer">
        <input
        placeholder="Search Here !!!"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
        />
        <button
          onClick={() => {
            setSearchfor(search);
            console.log(api);
          }}
        >
          Search
        </button>
      </div>

      <Context.Provider value={{api}}>
        <Display/>
      </Context.Provider>
    </div>
  );
}

export default App;
