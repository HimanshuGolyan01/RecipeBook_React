import React, { useState, useEffect } from "react";
import Recipe from "./components/Recipe";

const App = () => {
  const APP_ID = '1f005a8b';
  const APP_KEY = 'b2d6d91533020e41909cc9acb841ead6';

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('paneer');
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const response = await res.json();
      console.log(response);
      setDishes(response.hits);
    }
    getData();
  }, [query]);

  const submitHandler = e => {
    e.preventDefault();
    console.log(search);
    setQuery(search);
    setSearch("");
  }

  return (
    <>
      <div className="bg-purple-400 p-5 flex flex-col items-center">
      <div className="text-3xl font-bold mb-4">FOODIE ADDA</div>
        <div className="text-2xl font-bold mb-4">Life is uncertain. Eat dessert first</div>
        <div className="flex flex-col items-center">
          <input 
            type="text" 
            className="border-2 border-black rounded-lg px-2 py-1 mb-2"
            placeholder="Search your dishes" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={submitHandler} className="border-2 border-black rounded-lg px-5 py-1 text-white font-bold">Search</button>
        </div>
      </div>
      <div className="bg-purple-500 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dishes.map((item, idx) => (
          <Recipe recipelist={item} key={idx} />
        ))}
      </div>
    </>
  );
}

export default App;
