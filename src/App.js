import './App.css';
import React, {useState} from 'react';

function App() {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://api.github.com/search/repositories?q={keyword}')
      .then(response=>response.json())
      .then(data=>setData(data.items))
      .catch( err=> console.error(err))    
  }

  return (
    <div className="App">
      <input value={keyword}
        onChange={( e=>setKeyword(e.target.value))} />
      <button onClick={fetchData}>Fetch</button>

    </div>
  );
}

export default App;
