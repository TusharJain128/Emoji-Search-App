import React, { useEffect, useState } from 'react';
import EmojiList from './EmojiList.json';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedList, setSortedList] = useState([])

    useEffect(()=>{
      setSortedList(EmojiList)
    },[])

    function handleSearch(e){
      setSearchQuery(e.target.value)

      if(e.target.value.length==0){
        setSortedList(EmojiList)
      }
      else{
        let data = EmojiList.filter(x=> x.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setSortedList(data)
      }
    }

  return (
    <div align="center">
      <h1>Emoji Search App</h1>
      <input
        type="text"
        placeholder="Search for an emoji..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div>
        {sortedList.map((emoji) => (
          <div key={Math.random()}>
            <span >{emoji.symbol}</span> {emoji.title}
          </div>
        ))}
      </div>
    </div>
  );
}
